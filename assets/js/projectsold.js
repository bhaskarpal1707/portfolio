// Auto-refresh every 5 minutes (optional)
// setInterval(refreshPortfolio, 5 * 60 * 1000);

// const SHEET_ID = "1R45s-t0mdWyHvLFqKaTWhXC82O5O5mubSU_NilaP7jo";
// const CATEGORY_SHEET_NAME = "category"; // Change this to "projects" if needed
// const PROJECTS_SHEET_NAME = "projects"; // Change this to "projects" if needed

// const CATEGORY_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${CATEGORY_SHEET_NAME}`;
// const PROJECTS_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${PROJECTS_SHEET_NAME}`;

// const categoryListView = document.getElementById("category_list");

// const projects = [];

// // Option 1: Staggered Fade-Up Animation (Most Common)
// const displayProjectsStaggered = (filteredProjects, filterTag) => {
//   const projectContainer = document.getElementById("project_list_view");
//   projectContainer.innerHTML = "";

//   filteredProjects.forEach((project, idx) => {
//     const projectElement = document.createElement("div");

//     const filterClass = filterTag === "*" ? "" : filterTag;
//     projectElement.className = `col-lg-4 col-md-6 portfolio-item isotope-item ${filterClass}`;

//     // Staggered animation with increasing delay
//     projectElement.setAttribute("data-aos", "fade-up");
//     projectElement.setAttribute("data-aos-delay", (idx * 150).toString());
//     projectElement.setAttribute("data-aos-duration", "800");
//     projectElement.setAttribute("data-aos-easing", "ease-out-cubic");

//     projectElement.innerHTML = `
//       <img src="${project.image || 'assets/img/masonry-portfolio/masonry-portfolio-4.jpg'}" class="img-fluid" alt="${project.title}" />
//       <div class="portfolio-info">
//         <h4>${project.title}</h4>
//         <p>${project.subtitle}</p>
//         <a href="${project.image}" title="${project.title}" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
//           <i class="bi bi-zoom-in"></i>
//         </a>
//         <a href="portfolio-details.html" title="More Details" class="details-link">
//           <i class="bi bi-link-45deg"></i>
//         </a>
//       </div>
//     `;

//     projectContainer.appendChild(projectElement);
//   });

//   // Delay Isotope and AOS refresh to ensure proper timing
//   setTimeout(() => {
//     if (window.initIsotope) {
//       window.initIsotope.reloadItems();
//       window.initIsotope.arrange();
//     }
//     if (window.AOS) {
//       window.AOS.refresh();
//     }
//   }, 100);
// };

// // Option 2: Scale and Fade Animation
// const displayProjectsScale = (filteredProjects, filterTag) => {
//   const projectContainer = document.getElementById("project_list_view");
//   projectContainer.innerHTML = "";

//   filteredProjects.forEach((project, idx) => {
//     const projectElement = document.createElement("div");

//     const filterClass = filterTag === "*" ? "" : filterTag;
//     projectElement.className = `col-lg-4 col-md-6 portfolio-item isotope-item ${filterClass}`;

//     // Scale animation
//     projectElement.setAttribute("data-aos", "zoom-in");
//     projectElement.setAttribute("data-aos-delay", (idx * 100).toString());
//     projectElement.setAttribute("data-aos-duration", "600");

//     projectElement.innerHTML = `
//       <img src="${project.image || 'assets/img/masonry-portfolio/masonry-portfolio-4.jpg'}" class="img-fluid" alt="${project.title}" />
//       <div class="portfolio-info">
//         <h4>${project.title}</h4>
//         <p>${project.subtitle}</p>
//         <a href="${project.image}" title="${project.title}" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
//           <i class="bi bi-zoom-in"></i>
//         </a>
//         <a href="portfolio-details.html" title="More Details" class="details-link">
//           <i class="bi bi-link-45deg"></i>
//         </a>
//       </div>
//     `;

//     projectContainer.appendChild(projectElement);
//   });

//   setTimeout(() => relayoutIsotope(), 100);
// };

// // Option 3: Slide from Different Directions
// const displayProjectsSlide = (filteredProjects, filterTag) => {
//   const projectContainer = document.getElementById("project_list_view");
//   projectContainer.innerHTML = "";

//   const animations = ['fade-right', 'fade-up', 'fade-left'];

//   filteredProjects.forEach((project, idx) => {
//     const projectElement = document.createElement("div");

//     const filterClass = filterTag === "*" ? "" : filterTag;
//     projectElement.className = `col-lg-4 col-md-6 portfolio-item isotope-item ${filterClass}`;

//     // Alternating slide directions
//     const animationType = animations[idx % 3];
//     projectElement.setAttribute("data-aos", animationType);
//     projectElement.setAttribute("data-aos-delay", (Math.floor(idx / 3) * 200).toString());
//     projectElement.setAttribute("data-aos-duration", "700");

//     projectElement.innerHTML = `
//       <img src="${project.image || 'assets/img/masonry-portfolio/masonry-portfolio-4.jpg'}" class="img-fluid" alt="${project.title}" />
//       <div class="portfolio-info">
//         <h4>${project.title}</h4>
//         <p>${project.subtitle}</p>
//         <a href="${project.image}" title="${project.title}" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
//           <i class="bi bi-zoom-in"></i>
//         </a>
//         <a href="portfolio-details.html" title="More Details" class="details-link">
//           <i class="bi bi-link-45deg"></i>
//         </a>
//       </div>
//     `;

//     projectContainer.appendChild(projectElement);
//   });

//   setTimeout(() => relayoutIsotope(), 100);
// };

// // Option 4: Custom CSS Animation (No AOS)
// const displayProjectsCustom = (filteredProjects, filterTag) => {
//   const projectContainer = document.getElementById("project_list_view");
//   projectContainer.innerHTML = "";

//   filteredProjects.forEach((project, idx) => {
//     const projectElement = document.createElement("div");

//     const filterClass = filterTag === "*" ? "" : filterTag;
//     projectElement.className = `col-lg-4 col-md-6 portfolio-item isotope-item ${filterClass}`;

//     // Add custom animation class
//     projectElement.style.animationDelay = `${idx * 0.1}s`;
//     projectElement.classList.add('portfolio-animate');

//     projectElement.innerHTML = `
//       <img src="${project.image || 'assets/img/masonry-portfolio/masonry-portfolio-4.jpg'}" class="img-fluid" alt="${project.title}" />
//       <div class="portfolio-info">
//         <h4>${project.title}</h4>
//         <p>${project.subtitle}</p>
//         <a href="${project.image}" title="${project.title}" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
//           <i class="bi bi-zoom-in"></i>
//         </a>
//         <a href="portfolio-details.html" title="More Details" class="details-link">
//           <i class="bi bi-link-45deg"></i>
//         </a>
//       </div>
//     `;

//     projectContainer.appendChild(projectElement);
//   });

//   setTimeout(() => relayoutIsotope(), 100);
// };

// // Enhanced filter function with smooth transitions
// const filterProjects = (filterTag) => {
//   // First, fade out existing items
//   const existingItems = document.querySelectorAll('.portfolio-item');
//   existingItems.forEach((item, idx) => {
//     item.style.animationDelay = `${idx * 0.05}s`;
//     item.classList.add('portfolio-fade-out');
//   });

//   const filteredProjects = projects.filter((project) =>
//     project.keywords.toLowerCase().includes(categoryname.toLowerCase())
//   );

//   // After fade out, display new items
//   setTimeout(() => {
//     displayProjectsStaggered(filteredProjects, filterTag)
//     // displayProjectsStaggered(filterProjects(filterTag), filterTag);
//   }, 300);
// };

// const fetchProjects = () => {
//   fetch(PROJECTS_URL)
//     .then((res) => res.text())
//     .then((text) => {
//       const jsonData = JSON.parse(text.substring(47).slice(0, -2)); // Clean JSON

//       const rows = jsonData.table.rows;

//       rows.forEach((row, index) => {
//         if (index === 0) return; // Skip the header row
//         projects.push({
//           title: row.c[0]?.v || "",
//           subtitle: row.c[1]?.v || "", // Assumes the first column has the names
//           image: row.c[2]?.v || "", // Assumes the second column has the image URL
//           tool_used: row.c[3]?.v || "", // Assumes the third column has the
//           keywords: row.c[4]?.v || "", // Assumes the fourth column has the keywords
//           git_link: row.c[5]?.v || "", // Assumes the fifth column has the
//           linkdiin_link: row.c[6]?.v || "", // Assumes the sixth column has the
//         });
//       });

//       filterProjects("All", "*"); // Show all projects initially
//       // Initialize Isotope AFTER projects are rendered
//       const projectContainer = document.querySelector("#project_list_view");
//       if (projectContainer) {
//         window.initIsotope = new Isotope(projectContainer, {
//           itemSelector: ".portfolio-item",
//           layoutMode: "masonry",
//         });
//       }

//       // Re-layout Isotope
//       if (window.initIsotope) {
//         window.initIsotope.reloadItems();
//         window.initIsotope.arrange();
//       }

//       // Refresh AOS animations
//       if (window.AOS) {
//         window.AOS.refreshHard();
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching sheet data:", error);
//     });
// };

// // const displayProjects = (filteredProjects, filterTag) => {
// //   const projectContainer = document.getElementById("project_list_view");
// //   projectContainer.innerHTML = ""; // Clear previous projects

// //   filteredProjects.forEach((project, idx) => {
// //     const projectElement = document.createElement("div");
// //     projectElement.className =
// //       "col-lg-4 col-md-6 portfolio-item isotope-item " + filterTag === "*" ? "" : filterTag;
// //     projectElement.setAttribute("data-bs-toggle", "modal");
// //     projectElement.setAttribute("data-bs-target", "#exampleModal");

// //     projectElement.innerHTML = `
// //       <img
// //         src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
// //         class="img-fluid"
// //         alt=""
// //       />
// //       <div class="portfolio-info">
// //         <h4>${project.title}</h4>
// //         <p>${project.subtitle}</p>
// //         <a
// //           href="${project.image}"
// //           title="${project.title}"
// //           data-gallery="portfolio-gallery-app"
// //           class="glightbox preview-link"
// //         ><i class="bi bi-zoom-in"></i></a>
// //         <a
// //           href="portfolio-details.html"
// //           title="More Details"
// //           class="details-link"
// //         ><i class="bi bi-link-45deg"></i></a>
// //       </div>
// //     `;

// //     projectContainer.appendChild(projectElement);
// //   });

// //   // Re-layout Isotope
// //   if (window.initIsotope) {
// //     window.initIsotope.reloadItems();
// //     window.initIsotope.arrange();
// //   }

// //   // Refresh AOS animations
// //   if (window.AOS) {
// //     window.AOS.refresh();
// //   }
// // };

// // Function to filter projects based on the selected category
// // const filterProjects = (categoryname, filterTag) => {
// //   if (categoryname === "All") {
// //     displayProjects(projects, "*"); // Show all projects
// //     return;
// //   }
// //   // Filter projects based on the category name
//   // const filteredProjects = projects.filter((project) =>
//   //   project.keywords.toLowerCase().includes(categoryname.toLowerCase())
//   // );
// //   // Assuming you have a function to display the filtered projects
// //   displayProjects(filteredProjects, filterTag);
// // };

// const handleCategoryClick = (event) => {
//   const filterTag = event.target.getAttribute("data-filter");
//   const activeItem = document.querySelector(".filter-active");
//   if (activeItem) {
//     activeItem.classList.remove("filter-active");
//   }
//   event.target.classList.add("filter-active");

//   // Assuming you have a function to filter projects based on the category
//   filterProjects(event.target.textContent, filterTag);
// };

// fetch(CATEGORY_URL)
//   .then((res) => res.text())
//   .then((text) => {
//     const jsonData = JSON.parse(text.substring(47).slice(0, -2)); // Clean JSON

//     const rows = jsonData.table.rows;

//     const result = rows.map((row) => {
//       return {
//         id: row.c[0]?.v || "",
//         name: row.c[1]?.v || "", // Assumes the first column has the names
//       };
//     });

//     result.forEach((item, index) => {
//       const li = document.createElement("li");
//       li.textContent = item.name;
//       li.setAttribute(
//         "data-filter",
//         `.filter-${item.name.toLowerCase().replaceAll(" ", "")}`
//       ); // Create a filter class based on the name
//       li.addEventListener("click", handleCategoryClick);
//       categoryListView.appendChild(li);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching sheet data:", error);
//   });

// fetchProjects();
