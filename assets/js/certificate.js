const NEW_SHEET_ID = "1R45s-t0mdWyHvLFqKaTWhXC82O5O5mubSU_NilaP7jo";
const CERTIFICATE_SHEET_NAME = "certificate"; // Change this to "projects" if needed

const CERTIFICATE_URL = `https://docs.google.com/spreadsheets/d/${NEW_SHEET_ID}/gviz/tq?tqx=out:json&sheet=${CERTIFICATE_SHEET_NAME}`;

const certificates = [];

function renderCertificates(certificates) {
  const certificateContainer = document.getElementById("certificate_container");

  certificateContainer.innerHTML = ""; // Clear existing certificates

  certificates.forEach((certificate) => {
    const certificateDiv = document.createElement("div");
    certificateDiv.classList.add("col-md-4");

    certificateDiv.innerHTML = `
        <a href="#" class="portfolio-card">
              <img
                src="${certificate.image}"
                class="portfolio-card-img"
                alt="${certificate.name}"
              />
              <span class="portfolio-card-overlay">
                <span class="portfolio-card-caption">
                  <h4>${certificate.name}</h4>
                  <p class="font-weight-normal">${certificate.subtitle}</p>
                </span>
              </span>
            </a>
      `;

    certificateContainer.appendChild(certificateDiv);
  });
}
function showCertificates() {
  const certificateContainer = document.getElementById("certificate_container");
  certificateContainer.innerHTML = ""; // Clear existing certificates
  certificates.forEach((certificate) => {
    const certificateDiv = document.createElement("div");
    certificateDiv.innerHTML = `
      <a href="#" class="portfolio-card">
      <img
        src="${certificate.image}"
        class="portfolio-card-img"
        alt="${certificate.name}"
      />
      <span class="portfolio-card-overlay">
        <span class="portfolio-card-caption">
        <h4>${certificate.name}</h4>
        <p class="font-weight-normal">${certificate.subtitle}</p>
        <div class="portfolio-links"></div>
          <button onclick="window.open('${certificate.link}', '_blank')" class="btn btn-sm btn-primary open_cert_btn" title="Open Certificate">
           <i class="fa fa-external-link-alt"></i> Show Certificate
          </button>
        </div>
        </span>
      </span>
      </a>
    `;

    certificateDiv.addEventListener("click", () => {
      const fullDescription = certificate.full_description;
      document.getElementById("project_full_description").innerHTML =
        fullDescription;
    });
    certificateContainer.appendChild(certificateDiv);

    // THEN run this:
    certificateDiv.querySelectorAll(".portfolio-links a").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });
  });
}

async function fetchCertificate() {
  try {
    const response = await fetch(CERTIFICATE_URL);
    const text = await response.text();
    const jsonData = JSON.parse(text.substring(47).slice(0, -2)); // Clean JSON

    const rows = jsonData.table.rows;

    rows.forEach((row, index) => {
      if (index === 0) return; // Skip the header row
      const certificate = {
        name: row.c[0]?.v || "",
        subtitle: row.c[1]?.v || "", // Assumes the first column has the names
        link: row.c[2]?.v || "", // Assumes the second column has the image URL
        image: row.c[3]?.v || "", // Assumes the third column has the
      };
      certificates.push(certificate);
    });

    showCertificates();
  } catch (error) {
    console.error("Error fetching certificates:", error);
  }
}

fetchCertificate();
