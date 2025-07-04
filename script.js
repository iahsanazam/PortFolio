const projects = [
  {
    title: "Project One",
    image: "images/project1.jpg",
    description: "A responsive web design for a business site."
  },
  {
    title: "Project Two",
    image: "images/project2.jpg",
    description: "An e-commerce platform built with modern UI."
  },
  {
    title: "Project Three",
    image: "images/project3.jpg",
    description: "A photography website with gallery features."
  }
];

const gallery = document.getElementById('portfolio');
projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" />
    <div class="card-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
  `;
  gallery.appendChild(card);
});
