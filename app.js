fetch('https://smartshop-backend.onrender.com/api/products')
.then(res => res.json())
.then(products => {
  const section = document.getElementById('products');
  section.innerHTML = products.map(p => `
    <div class="card">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <strong>R${p.price}</strong><br/>
      <button onclick="window.location.href='https://wa.me/27600000000?text=I want to buy ${p.name}'">Order on WhatsApp</button>
    </div>
  `).join('');
});
