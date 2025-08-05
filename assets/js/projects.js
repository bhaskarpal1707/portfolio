const SHEET_ID = "1R45s-t0mdWyHvLFqKaTWhXC82O5O5mubSU_NilaP7jo";
const CATEGORY_SHEET_NAME = "category"; // Change this to "projects" if needed
const PROJECTS_SHEET_NAME = "projects"; // Change this to "projects" if needed

const CATEGORY_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${CATEGORY_SHEET_NAME}`;
const PROJECTS_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${PROJECTS_SHEET_NAME}`;

const categoryListView = document.getElementById("category_list");

const projects = [];

// Stop video when modal is hidden
document.getElementById('aboutVideoModal').addEventListener('hidden.bs.modal', function () {
    const iframe = this.querySelector('iframe');
    const src = iframe.src;
    iframe.src = '';
    iframe.src = src; // This reloads the iframe, stopping the video
});


function filterProjectsByCategory(category) {
  if (!category || projects.length === 0) {
    alert("No projects available to filter.");
    return;
  }
  if (category === "All") {
    // If "All" is clicked, show all projects
    renderProjects(projects);
    return;
  }
  //filter projects based on the clicked category
  const filteredProjects = projects.filter((project) =>
    project.keywords.toLowerCase().includes(category.toLowerCase())
  );

  renderProjects(filteredProjects);
}

function handleCategoryClick(event) {
  const filterTag = event.target.getAttribute("data-filter");
  const activeItem = document.querySelector(".filter-active");
  const categoryname = event.target.textContent.trim();
  if (activeItem) {
    activeItem.classList.remove("filter-active");
  }
  event.target.classList.add("filter-active");

  if (projects.length === 0) {
    alert("No projects available to filter.");
    return;
  }

  filterProjectsByCategory(categoryname);
}

function renderCategories(categories) {
  categories.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.setAttribute(
      "data-filter",
      `.filter-${item.name.toLowerCase().replaceAll(" ", "")}`
    ); // Create a filter class based on the name
    li.addEventListener("click", handleCategoryClick);
    categoryListView.appendChild(li);
  });
}

function renderProjects(projects) {
  const projectContainer = document.getElementById("project_container");

  projectContainer.innerHTML = ""; // Clear existing projects

  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add(
      // "col-lg-4",
      // "col-md-6",
      // "portfolio-item",
      "project-card",
      `filter-${project.keywords.toLowerCase().replaceAll(" ", "")}`
    );

    // class="portfolio-info"
    // 

    projectItem.setAttribute("data-bs-toggle", "modal");
    projectItem.setAttribute("data-bs-target", "#exampleModal");

    // <img 
    //       src="${project.image}" 
    //       loading="lazy"
    //       class=""
    //       alt=""
    //     />

    // <div class="shimmer"></div>

    projectItem.innerHTML = `
        <div class="image-wrapper">
          <img src="${project.image}" alt="" class="lazy-image img-fluid" />
        </div>
        
        <div class="project-info">
          <div>
            <h4>${project.title}</h4>
            <p>${project.subtitle}</p>
          </div>
          <div class="portfolio-links">
            <a href="${project.git_link}" title="${project.git_link}" class="git-link" onclick="event.stopPropagation()">
                <i class="bi bi-github" style="font-size: 1.5rem;"></i>
            </a>
            <a href="${project.linkdiin_link}" title="${project.linkdiin_link}" class="linkdin-link" onclick="event.stopPropagation()">
                <i class="bi bi-linkedin" style="font-size: 1.5rem;"></i>
            </a>
          </div>
        </div>
      `;


    projectItem.addEventListener("click", () => {
      const fullDescription = project.full_description;
      document.getElementById("project_full_description").innerHTML = fullDescription;
    });
    projectContainer.appendChild(projectItem);

    // THEN run this:
    projectItem.querySelectorAll(".portfolio-links a").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });
  });
}

async function fetchCategories() {
  try {
    const response = await fetch(CATEGORY_URL);
    const text = await response.text();
    const jsonData = JSON.parse(text.substring(47).slice(0, -2)); // Clean JSON

    const rows = jsonData.table.rows;

    const result = rows.map((row) => {
      return {
        id: row.c[0]?.v || "",
        name: row.c[1]?.v || "", // Assumes the first column has the names
      };
    });
    renderCategories(result);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

async function fetchProjects() {
  try {
    const response = await fetch(PROJECTS_URL);
    const text = await response.text();
    const jsonData = JSON.parse(text.substring(47).slice(0, -2)); // Clean JSON

    const rows = jsonData.table.rows;

    rows.forEach((row, index) => {
      if (index === 0) return; // Skip the header row
      const project = {
        title: row.c[0]?.v || "",
        subtitle: row.c[1]?.v || "", // Assumes the first column has the names
        image: row.c[2]?.v || "", // Assumes the second column has the image URL
        tool_used: row.c[3]?.v || "", // Assumes the third column has the
        keywords: row.c[4]?.v || "", // Assumes the fourth column has the keywords
        git_link: row.c[5]?.v || "", // Assumes the fifth column has the
        linkdiin_link: row.c[6]?.v || "", // Assumes the sixth column has the
        full_description: row.c[7]?.v || "",
      };
      projects.push(project);
      filterProjectsByCategory("All"); // Initially show all projects
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

fetchCategories();
fetchProjects();
// Prevent modal from opening when clicking on the links
document.querySelectorAll(".portfolio-links a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click from bubbling to projectItem
  });
});
