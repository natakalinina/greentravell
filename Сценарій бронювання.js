// Дані для турів
const toursData = [
  {name:'Альпійський вікенд', country:'Австрія', price:500, duration:'3 дні', description:'Гори, природа, відпочинок', img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80'},
  {name:'Фіорди та водоспади', country:'Норвегія', price:750, duration:'5 днів', description:'Фіорди, водоспади, природа', img:'https://images.unsplash.com/photo-1500048993959-d6b5b7f5a1c5?auto=format&fit=crop&w=1000&q=80'},
  {name:'Вело-тур тюльпанами', country:'Нідерланди', price:600, duration:'4 дні', description:'Тюльпанові поля, велосипеди, природа', img:'https://images.unsplash.com/photo-1520975698519-59c35dbaef26?auto=format&fit=crop&w=1000&q=80'},
  {name:'Магія Тоскани', country:'Італія', price:700, duration:'5 днів', description:'Виноградники, середньовічні міста, гастрономія', img:'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1000&q=80'},
  {name:'Замки Баварії', country:'Німеччина', price:650, duration:'4 дні', description:'Середньовічні замки, пейзажі, історія', img:'https://images.unsplash.com/photo-1505842465776-3d90f616310d?auto=format&fit=crop&w=1000&q=80'},
  {name:'Карпатський релакс', country:'Україна', price:400, duration:'3 дні', description:'Гори, спокій, природа', img:'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80'}
];

// Відгуки
const reviewsData = [
  {name:'Анна, Львів', text:'«Подорож до Тоскани була неймовірною! Все організовано ідеально.»', avatar:'https://randomuser.me/api/portraits/women/44.jpg'},
  {name:'Олег, Київ', text:'«Фіорди — це щось неймовірне. Green Travel — ви топ!»', avatar:'https://randomuser.me/api/portraits/men/32.jpg'},
  {name:'Марія, Івано-Франківськ', text:'«Карпати — справжній релакс. Дякую за тур без стресу.»', avatar:'https://randomuser.me/api/portraits/women/68.jpg'}
];

// Додавання турів у DOM
const toursContainer = document.getElementById('toursContainer');
toursData.forEach(tour => {
  const tourDiv = document.createElement('div');
  tourDiv.className = 'tour';
  tourDiv.innerHTML = `
    <img src='${tour.img}' alt='${tour.name}'>
    <div class='tour-content'>
      <h3>${tour.name}</h3>
      <div class='price'>${tour.price} €</div>
      <button onclick="openModal('${tour.name}', ${tour.price}); event.stopPropagation();">Забронювати</button>
    </div>
  `;
  tourDiv.addEventListener('click', () => showTourDetails(tour));
  toursContainer.appendChild(tourDiv);
});

// Додавання відгуків
const reviewsContainer = document.getElementById('reviewsContainer');
reviewsData.forEach(review => {
  const revDiv = document.createElement('div');
  revDiv.className = 'feature';
  revDiv.innerHTML = `<img src='${review.avatar}' alt='${review.name}' style='width:70px;border-radius:50%;margin-bottom:10px;'>
    <p>${review.text}</p>
    <strong>${review.name}</strong>`;
  reviewsContainer.appendChild(revDiv);
});

// Модальне вікно
let currentPrice = 0;
function openModal(name, price) {
  document.getElementById('bookingModal').style.display = 'flex';
  document.getElementById('tourName').textContent = name;
  document.getElementById('tourDetails').textContent = '';
  currentPrice = price;
  calculate();
}
function closeModal() { document.getElementById('bookingModal').style.display = 'none'; }
function calculate() {
  const people = document.getElementById('people').value || 1;
  document.getElementById('totalPrice').textContent = 'Вартість: ' + (currentPrice * people) + ' €';
}
document.getElementById('bookingModal').addEventListener('click', e => { if(e.target === document.getElementById('bookingModal')) closeModal(); });

function showTourDetails(tour) {
  document.getElementById('bookingModal').style.display = 'flex';
  document.getElementById('tourName').textContent = `${tour.name} – ${tour.country} (${tour.duration})`;
  document.getElementById('tourDetails').textContent = `${tour.description} | Ціна: ${tour.price} €`;
  currentPrice = tour.price;
  calculate();
}