/* Adopt Connect: multi-page front-end demo using hash-based navigation. */
"use strict";

const agencies = [
  {
    id: 1,
    name: "Example Child Care Centre",
    city: "New Delhi",
    state: "Delhi",
    icon: "⌂",
    description: "Sample directory entry demonstrating how institution information may be shown.",
    services: ["General process guidance", "Official resource navigation", "Questions for an agency representative"]
  },
  {
    id: 2,
    name: "Sample Family Support Foundation",
    city: "Mumbai",
    state: "Maharashtra",
    icon: "♡",
    description: "Fictional sample listing for testing agency search and detailed institution pages.",
    services: ["Family guidance information", "Document checklist guidance", "General adoption resources"]
  },
  {
    id: 3,
    name: "Demo Child Welfare Services",
    city: "Bengaluru",
    state: "Karnataka",
    icon: "✳",
    description: "Placeholder entry showing how a directory can organize location and support information.",
    services: ["General information", "Resource referrals", "Process overview"]
  },
  {
    id: 4,
    name: "Illustrative Adoption Support Centre",
    city: "Lucknow",
    state: "Uttar Pradesh",
    icon: "⌁",
    description: "Fictional entry for testing a future institution directory and inquiry workflow.",
    services: ["Process orientation", "Official resource links", "Question preparation"]
  },
  {
    id: 5,
    name: "Sample Child and Family Resource",
    city: "Chennai",
    state: "Tamil Nadu",
    icon: "❋",
    description: "Sample listing showing how location and support information could appear.",
    services: ["Educational resources", "Process information", "Support navigation"]
  },
  {
    id: 6,
    name: "Example Family Guidance Centre",
    city: "Pune",
    state: "Maharashtra",
    icon: "⌂",
    description: "Fictional listing for testing institution cards, saved items and detail views.",
    services: ["General guidance", "Checklist information", "Support resources"]
  }
];

const processSteps = [
  {
    id: "eligibility",
    number: "01",
    title: "Understand eligibility",
    short: "Learn which eligibility requirements may apply.",
    intro: "Before beginning an adoption journey, learn which requirements and procedures apply to your circumstances. Requirements depend on current law and individual situations.",
    sections: [
      {
        title: "What to consider",
        items: [
          "Read the latest guidance published by CARA and relevant government authorities.",
          "Ask an authorized agency how eligibility is assessed in your circumstances.",
          "Remember that an online checklist cannot determine eligibility."
        ]
      },
      {
        title: "A practical next step",
        items: [
          "Prepare questions before contacting an authorized institution.",
          "Do not send identity documents through an unverified website or informal channel."
        ]
      }
    ]
  },
  {
    id: "registration",
    number: "02",
    title: "Learn about official registration",
    short: "Use the prescribed government process.",
    intro: "Registration and formal procedures must be completed through appropriate official channels. Adopt Connect is not a replacement for government registration and cannot submit an official application.",
    sections: [
      {
        title: "Before you begin",
        items: [
          "Use the official CARA website to find current instructions.",
          "Check that any institution you contact is currently authorized.",
          "Keep official reference numbers and account credentials secure."
        ]
      },
      {
        title: "Be cautious",
        items: [
          "Do not pay unofficial individuals promising a faster match.",
          "Never agree to a private child transfer or arrangement outside the legal process."
        ]
      }
    ]
  },
  {
    id: "documents",
    number: "03",
    title: "Prepare your documents",
    short: "Confirm the current checklist for your situation.",
    intro: "Document requirements depend on current rules and individual circumstances. Use this page as a planning aid only and confirm the current list with the official portal or an authorized agency.",
    sections: [
      {
        title: "Prepare carefully",
        items: [
          "Review the current official document list before collecting paperwork.",
          "Check records for consistency and validity.",
          "Ask how documents should be submitted securely."
        ]
      },
      {
        title: "Protect your information",
        items: [
          "Do not upload identity or financial documents to this demonstration website.",
          "Submit records only through approved, secure official channels."
        ]
      }
    ]
  },
  {
    id: "assessment",
    number: "04",
    title: "Assessment and home study",
    short: "Understand what the assessment is for.",
    intro: "The prescribed assessment helps relevant professionals understand a prospective family's readiness and circumstances. The authorized agency should explain the steps and documentation that apply.",
    sections: [
      {
        title: "How to prepare",
        items: [
          "Ask the authorized agency what the assessment involves.",
          "Discuss questions or support you may need.",
          "Learn about responsibilities and support available after adoption."
        ]
      },
      {
        title: "Remember",
        items: [
          "A website guide cannot replace assessment by authorized professionals.",
          "Confirm schedules and requirements directly with your agency."
        ]
      }
    ]
  },
  {
    id: "referral",
    number: "05",
    title: "Referral and matching procedure",
    short: "Follow the legally approved process.",
    intro: "Any referral or matching must follow the applicable official procedure and safeguards. This website does not display private child profiles or let users reserve or select children directly.",
    sections: [
      {
        title: "Important principles",
        items: [
          "Referrals are handled through authorized procedures.",
          "Children's privacy and best interests must remain central.",
          "Do not rely on unverified profiles or informal promises."
        ]
      },
      {
        title: "What this website can do",
        items: [
          "Help you understand general process information.",
          "Point you toward official guidance and authorized support."
        ]
      }
    ]
  },
  {
    id: "legal",
    number: "06",
    title: "Legal formalities and ongoing support",
    short: "Confirm every formal step with the authority.",
    intro: "Formal legal steps and post-adoption support depend on the applicable procedure. Follow instructions from the authorized institution and competent authorities.",
    sections: [
      {
        title: "Before proceeding",
        items: [
          "Make sure you understand any legal documents you are asked to sign.",
          "Ask qualified professionals about anything unclear.",
          "Keep official records in a secure place."
        ]
      },
      {
        title: "After adoption",
        items: [
          "Ask about follow-up or support requirements that apply.",
          "Seek professional guidance if a process or document is unclear."
        ]
      }
    ]
  }
];

const resources = [
  {
    id: "eligibility",
    category: "Getting started",
    title: "Eligibility: what should I check first?",
    short: "Questions to prepare before contacting an authorized agency.",
    intro: "Eligibility depends on the applicable adoption rules and your personal circumstances. This guide prepares you for a conversation with an authorized agency; it is not an eligibility decision or legal opinion.",
    sections: [
      {
        title: "Start with official information",
        text: "Check current CARA guidance and confirm which rules apply to your situation. Do not rely on outdated checklists or social media summaries."
      },
      {
        title: "Questions to ask",
        text: "Ask which criteria apply, what evidence is required, whether special circumstances affect the process, and where official updates are published."
      },
      {
        title: "Keep expectations realistic",
        text: "Creating an account or submitting an inquiry does not establish eligibility and does not guarantee a referral, match or approval."
      }
    ]
  },
  {
    id: "checklist",
    category: "Practical planning",
    title: "Document preparation checklist",
    short: "Plan your paperwork without sharing sensitive records here.",
    intro: "This is a general preparation list only. Confirm exact documents and submission steps through the relevant official process.",
    sections: [
      {
        title: "Before collecting documents",
        text: "Read the current official checklist. Requirements can change, so avoid preparing paperwork based on an outdated online list."
      },
      {
        title: "Organize your records",
        text: "Create a private checklist, check that records are readable and current, and note questions for the agency. Keep original documents secure."
      },
      {
        title: "Submit securely",
        text: "Do not send identity, financial or medical documents to this demo website. Submit records only through a secure channel confirmed by the authorized agency."
      }
    ]
  },
  {
    id: "questions",
    category: "Preparing for a conversation",
    title: "Questions to ask an authorized agency",
    short: "Make your first conversation more useful and focused.",
    intro: "Preparing questions can help you understand the official process, documents, privacy measures and support available.",
    sections: [
      {
        title: "Authorization and process",
        text: "How can I confirm your current authorization? Which official procedure applies to me? Where can I read the current government instructions?"
      },
      {
        title: "Documents and timing",
        text: "Which current document checklist should I use? How are records submitted securely? Which steps should I expect, and which timelines cannot be guaranteed?"
      },
      {
        title: "Privacy and support",
        text: "How is my information handled? Who can access it? What support is available if I have questions during or after the process?"
      }
    ]
  },
  {
    id: "privacy",
    category: "Safety and privacy",
    title: "Privacy, dignity and safe use",
    short: "Learn why careful handling of adoption information matters.",
    intro: "Adoption information is sensitive. A production platform should protect children's rights, carefully handle family information, and limit access to authorized users.",
    sections: [
      {
        title: "Children's information",
        text: "Do not publish identifying details, personal documents or child profiles without clear lawful authority and appropriate safeguards. This demonstration contains no real child records."
      },
      {
        title: "Your information",
        text: "This demo stores only basic inquiry details in your browser so the dashboard can show sample tracking. It does not send data to an organization. A live platform needs secure server-side handling, retention controls and access permissions."
      },
      {
        title: "Use official channels",
        text: "Never arrange a private child transfer or use unofficial offers. Follow applicable law and guidance from CARA and authorized institutions."
      }
    ]
  },
  {
    id: "official-links",
    category: "Verified information",
    title: "Official adoption information in India",
    short: "Use government sources for current rules and procedures.",
    intro: "For current requirements and the formal process, use government sources directly. Adopt Connect is an independent project concept, not a government website or adoption authority.",
    sections: [
      {
        title: "Central Adoption Resource Authority (CARA)",
        text: "Use the official CARA website for adoption-related information, procedures and current guidance."
      },
      {
        title: "Ministry of Women and Child Development",
        text: "Use the ministry website for government policies and broader child welfare information."
      },
      {
        title: "Confirm authorization",
        text: "Before sharing documents or acting on advice, confirm that an institution is currently authorized through official records."
      }
    ],
    links: [
      {
        label: "CARA official website",
        url: "https://cara.wcd.gov.in/"
      },
      {
        label: "Ministry of Women and Child Development",
        url: "https://wcd.gov.in/"
      }
    ]
  }
];

const faqs = [
  [
    "What is Adopt Connect?",
    "Adopt Connect is an information and guidance platform concept intended to help prospective adoptive parents understand the process and locate authorized support. It does not independently approve or arrange adoptions."
  ],
  [
    "Can I adopt a child directly through this website?",
    "No. Adoption must follow the prescribed legal process. This website cannot privately match, reserve or transfer a child, and it does not display real child profiles."
  ],
  [
    "Are institutions in the directory verified?",
    "No. Directory entries in this prototype are fictional demo data. A production website must verify current authorization through reliable official records before showing a verified status."
  ],
  [
    "Does submitting an inquiry start an official adoption application?",
    "No. The inquiry form is a project demonstration. It does not submit an official application or contact an agency."
  ],
  [
    "Does the website send my personal information anywhere?",
    "No. The demo does not send information to a server. The browser stores only limited demo inquiry information so the dashboard can illustrate tracking. Avoid entering sensitive personal data."
  ],
  [
    "Where can I check current adoption requirements?",
    "Use the official CARA website and consult an authorized agency for current eligibility, registration, documentation and procedure information."
  ]
];

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];

const app = $("#app");
let toastTimer;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function readStore(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    showToast("Browser storage is unavailable.");
    return false;
  }
}

function showToast(message) {
  let toast = $("#toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function routeInfo() {
  const raw = location.hash ? location.hash.slice(1) : "/home";
  const [path] = raw.split("?");

  return {
    path: path || "/home",
    parts: (path || "/home")
      .split("/")
      .filter(Boolean)
      .map(decodeURIComponent)
  };
}

function link(path, label, className = "") {
  return `<a class="${className}" href="#${path}">${label}</a>`;
}

function breadcrumbs(items) {
  return `
    <div class="breadcrumbs">
      ${items.map((item, index) => `
        ${index ? "<span>›</span>" : ""}
        ${item.path
          ? link(item.path, escapeHTML(item.label))
          : `<span>${escapeHTML(item.label)}</span>`
        }
      `).join("")}
    </div>
  `;
}

function intro(title, description, crumb = "") {
  return `
    <section class="page-intro">
      <div class="container">
        ${crumb ? breadcrumbs([
          { label: "Home", path: "/home" },
          { label: crumb }
        ]) : ""}

        <span class="eyebrow">ADOPT CONNECT</span>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
    </section>
  `;
}

function card(icon, title, description, path, tint = "") {
  return `
    <article class="card">
      <div class="card-icon ${tint}">${icon}</div>
      <h3>${escapeHTML(title)}</h3>
      <p>${escapeHTML(description)}</p>
      ${link(path, "Explore details →", "card-link")}
    </article>
  `;
}

function layout(content, activePath) {
  const navItems = [
    ["/home", "Home"],
    ["/how-it-works", "How it works"],
    ["/agencies", "Find support"],
    ["/resources", "Resources"],
    ["/about", "About us"]
  ];

  const nav = navItems.map(([path, label]) => {
    const active =
      activePath === path ||
      (path === "/agencies" && activePath.startsWith("/agency/")) ||
      (path === "/resources" && activePath.startsWith("/resource/"));

    return link(path, label, active ? "active" : "");
  }).join("");

  return `
    <div class="announcement">
      <span class="announcement-dot"></span>
      Adoption guidance starts with reliable information.
      ${link("/how-it-works", "Learn how it works ↗")}
    </div>

    <header class="header">
      ${link(
        "/home",
        `<span class="brand-mark">♡</span>
         <span>
           <span class="brand-name">adopt<span>connect</span></span>
           <small>Every step, with care.</small>
         </span>`,
        "brand"
      )}

      <button
        class="menu-toggle"
        id="menuToggle"
        aria-expanded="false"
        aria-label="Open navigation">☰</button>

      <nav class="nav" id="mainNav" aria-label="Main navigation">
        ${nav}

        <div class="nav-actions">
          <button class="icon-btn" id="themeToggle"
            aria-label="Toggle dark theme"
            title="Toggle theme">◐</button>

          ${link("/dashboard", "My dashboard", "btn btn-outline btn-small")}
          ${link("/login", "Log in", "btn btn-primary btn-small")}
        </div>
      </nav>
    </header>

    <main class="page" id="mainContent">${content}</main>

    <footer class="footer">
      <div class="container footer-main">
        <div>
          ${link(
            "/home",
            `<span class="brand-mark">♡</span>
             <span>
               <span class="brand-name">adopt<span>connect</span></span>
               <small>Every step, with care.</small>
             </span>`,
            "brand"
          )}
          <p class="footer-description">
            Clear information and thoughtful guidance for the adoption journey.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          ${link("/how-it-works", "How it works")}
          ${link("/agencies", "Find support")}
          ${link("/resources", "Resources")}
          ${link("/faq", "FAQs")}
        </div>

        <div>
          <h4>Official resources</h4>
          <a href="https://cara.wcd.gov.in/" target="_blank"
             rel="noopener noreferrer">CARA official website ↗</a>
          <a href="https://wcd.gov.in/" target="_blank"
             rel="noopener noreferrer">Ministry of WCD ↗</a>
          ${link("/contact", "Contact us")}
        </div>

        <div class="footer-note">
          ♡
          <p>Children's safety, privacy and dignity should always come first.</p>
        </div>
      </div>

      <div class="container footer-bottom">
        <span>© ${new Date().getFullYear()} Adopt Connect · Student project demonstration</span>
        <span>Not a government website or adoption authority.</span>
        ${link("/home", "Back to top ↑")}
      </div>
    </footer>

    <div id="toast" class="toast" role="status" aria-live="polite"></div>
  `;
}

/* Homepage */

function homePage() {
  return `
    <section class="container hero">
      <div class="hero-copy">
        <div class="eyebrow">A MORE INFORMED FIRST STEP</div>

        <h1>Some journeys<br>begin with <em>hope.</em></h1>

        <p>
          Growing a family through adoption is a meaningful journey.
          Find clear information, understand the process, and connect
          with authorized support — one step at a time.
        </p>

        <div class="hero-actions">
          ${link(
            "/how-it-works",
            "Explore the process ↗",
            "btn btn-primary btn-large"
          )}
          ${link(
            "/agencies",
            "Find authorized support →",
            "text-link"
          )}
        </div>

        <div class="hero-note">
          <span class="tick">✓</span>
          Built around privacy, dignity and trusted guidance.
        </div>
      </div>

      <div class="hero-art" role="img" aria-label="Warm illustration representing a family">
        <div class="art-sun"></div>
        <div class="art-orb"></div>

        <div class="art-family">
          <div class="person person-one">
            <div class="hair"></div>
            <div class="face"></div>
            <div class="body"></div>
          </div>

          <div class="person person-child">
            <div class="hair"></div>
            <div class="face"></div>
            <div class="body"></div>
          </div>

          <div class="person person-two">
            <div class="hair"></div>
            <div class="face"></div>
            <div class="body"></div>
          </div>

          <div class="art-ground"></div>
        </div>

        <div class="float-card float-top">
          ♡
          <span>
            <strong>Care comes first</strong>
            <small>At every step</small>
          </span>
        </div>

        <div class="float-card float-bottom">
          ✳
          <span>
            <strong>Every child deserves</strong>
            <small>a safe, loving future</small>
          </span>
        </div>
      </div>
    </section>

    <section class="trust-strip">
      <div class="trust-item">
        <span class="trust-icon">⌕</span>
        <span>
          <strong>Reliable information</strong>
          <small>Clear, practical guidance</small>
        </span>
      </div>

      <div class="trust-item">
        <span class="trust-icon">♧</span>
        <span>
          <strong>Authorized support</strong>
          <small>Find official channels</small>
        </span>
      </div>

      <div class="trust-item">
        <span class="trust-icon">♡</span>
        <span>
          <strong>Privacy by design</strong>
          <small>Children's dignity matters</small>
        </span>
      </div>
    </section>

    <section class="container section">
      <div class="section-top">
        <div>
          <div class="eyebrow">A LITTLE CLARITY GOES A LONG WAY</div>
          <h2>Start with the <em>right steps.</em></h2>
        </div>

        <p>
          Adoption follows a legal process designed to protect children
          and families. Explore each stage to understand the journey
          before taking the next step.
        </p>
      </div>

      <div class="cards">
        ${card(
          "⌁",
          "Learn",
          "Understand eligibility, the legal process and what to expect.",
          "/process/eligibility"
        )}
        ${card(
          "↗",
          "Connect",
          "Find guidance and learn how to approach authorized support.",
          "/agencies",
          "gold"
        )}
        ${card(
          "♡",
          "Proceed with care",
          "Follow official procedures and protect personal information.",
          "/resource/privacy",
          "coral"
        )}
      </div>

      <p class="notice">
        Adopt Connect is an information project, not an adoption authority.
        Official eligibility decisions, referrals and approvals are handled
        through the relevant authorities.
      </p>
    </section>

    <section class="section" style="background:var(--soft)">
      <div class="container">
        <div class="section-top">
          <div>
            <div class="eyebrow">A RESOURCE YOU CAN RETURN TO</div>
            <h2>Good information. <em>Less uncertainty.</em></h2>
          </div>
          ${link("/resources", "Browse all resources →", "text-link")}
        </div>

        <div class="cards">
          ${resources.slice(0, 3).map(resource =>
            card(
              "✳",
              resource.title,
              resource.short,
              `/resource/${resource.id}`
            )
          ).join("")}
        </div>
      </div>
    </section>
  `;
}

/* Adoption process pages */

function howItWorksPage() {
  return `
    ${intro(
      "The adoption journey, <em>step by step.</em>",
      "Explore general educational information about the adoption process. Always confirm current requirements with CARA and an authorized institution.",
      "How it works"
    )}

    <section class="container section">
      <div class="step-list">
        ${processSteps.map(step => `
          <a class="step-row" href="#/process/${step.id}">
            <span class="step-badge">${step.number}</span>
            <span>
              <h3>${escapeHTML(step.title)}</h3>
              <p>${escapeHTML(step.short)}</p>
            </span>
            <span class="step-arrow">→</span>
          </a>
        `).join("")}
      </div>

      <p class="notice">
        This guide is for general understanding only and does not replace
        official instructions, eligibility decisions or legal advice.
      </p>
    </section>
  `;
}

function nextStepId(id) {
  const index = processSteps.findIndex(step => step.id === id);
  return processSteps[(index + 1) % processSteps.length].id;
}

function processDetail(id) {
  const step = processSteps.find(item => item.id === id);

  if (!step) return notFoundPage();

  return `
    ${intro(
      `${step.number}. ${escapeHTML(step.title)}`,
      escapeHTML(step.intro),
      "How it works"
    )}

    <section class="container section detail-layout">
      <article class="content-panel">
        <h2>${escapeHTML(step.title)}</h2>
        <p>${escapeHTML(step.intro)}</p>

        ${step.sections.map(section => `
          <h3>${escapeHTML(section.title)}</h3>
          <ul>
            ${section.items.map(item =>
              `<li>${escapeHTML(item)}</li>`
            ).join("")}
          </ul>
        `).join("")}

        <div class="hero-actions" style="margin-top:24px">
          ${link(
            "/process/" + nextStepId(id),
            "Next step →",
            "btn btn-primary"
          )}
          ${link("/how-it-works", "All process steps", "btn btn-outline")}
        </div>
      </article>

      <aside class="side-panel">
        <h3>Need official guidance?</h3>
        <p>
          Use trusted government sources and check that an institution's
          authorization is current.
        </p>
        ${link(
          "/resource/official-links",
          "Official resources →",
          "btn btn-outline btn-full"
        )}
        ${link(
          "/contact",
          "Ask a general question →",
          "btn btn-quiet btn-full"
        )}
      </aside>
    </section>
  `;
}

/* Agency directory and detail pages */

function agenciesPage() {
  return `
    ${intro(
      "Find guidance, <em>closer to you.</em>",
      "Search example directory entries to see how institution cards and detail pages work. The names below are fictional demo records and are not verified agencies.",
      "Find support"
    )}

    <section class="container section">
      <div class="notice">
        Demo data only: these entries are fictional. Do not treat them as real
        institutions or verified adoption agencies. A production directory must
        validate authorization from official records.
      </div>

      <div class="search-tools">
        <input
          class="field"
          id="agencySearch"
          type="search"
          placeholder="Search by institution or city…"
          aria-label="Search institutions">

        <select id="stateFilter" aria-label="Filter by state">
          <option value="">All states</option>
          ${[...new Set(agencies.map(agency => agency.state))]
            .sort()
            .map(state => `<option>${escapeHTML(state)}</option>`)
            .join("")}
        </select>

        <select id="sortAgencies" aria-label="Sort institutions">
          <option value="name">Sort: A–Z</option>
          <option value="city">Sort: City</option>
        </select>
      </div>

      <div class="agency-grid cards" id="agencyGrid"></div>

      <div class="directory-bottom">
        <span id="agencyCount"></span>
        <button class="btn btn-outline" id="clearFilters">Clear filters ↺</button>
      </div>
    </section>
  `;
}

function renderAgencyCards() {
  const grid = $("#agencyGrid");

  if (!grid) return;

  const query = $("#agencySearch").value.trim().toLowerCase();
  const state = $("#stateFilter").value;
  const sort = $("#sortAgencies").value;
  const saved = readStore("ac_saved", []);

  let shown = agencies.filter(agency => {
    const searchText =
      `${agency.name} ${agency.city} ${agency.state}`.toLowerCase();

    return searchText.includes(query) &&
      (!state || agency.state === state);
  });

  shown.sort((a, b) => {
    return sort === "city"
      ? a.city.localeCompare(b.city)
      : a.name.localeCompare(b.name);
  });

  if (!shown.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No examples found</h3>
        <p>Try another search or clear the filters.</p>
      </div>
    `;

    $("#agencyCount").textContent = "No examples match your search";
    return;
  }

  grid.innerHTML = shown.map(agency => `
    <article class="agency-card">
      <div class="agency-top">
        <div class="agency-symbol">${agency.icon}</div>

        <button
          class="save-btn ${saved.includes(agency.id) ? "saved" : ""}"
          data-save="${agency.id}"
          aria-pressed="${saved.includes(agency.id)}"
          aria-label="Save institution">
          ${saved.includes(agency.id) ? "♥" : "♡"}
        </button>
      </div>

      <span class="demo-tag">Demo · not verified</span>

      <h3>${escapeHTML(agency.name)}</h3>

      <div class="agency-location">
        ⌖ ${escapeHTML(agency.city)}, ${escapeHTML(agency.state)}
      </div>

      <p>${escapeHTML(agency.description)}</p>

      <div class="agency-actions">
        <a href="#/agency/${agency.id}">View details →</a>
        <a class="inquire-btn" href="#/contact?agency=${agency.id}">
          Ask guidance
        </a>
      </div>
    </article>
  `).join("");

  $("#agencyCount").textContent =
    `Showing ${shown.length} of ${agencies.length} fictional demo entries`;
}

function agencyDetail(id) {
  const agency = agencies.find(item => item.id === Number(id));

  if (!agency) return notFoundPage();

  return `
    ${intro(
      escapeHTML(agency.name),
      `${escapeHTML(agency.city)}, ${escapeHTML(agency.state)} · Demonstration listing`,
      "Find support"
    )}

    <section class="container section detail-layout">
      <article class="content-panel">
        <div class="agency-symbol">${agency.icon}</div>
        <span class="demo-tag">Fictional demo entry · not verified</span>

        <h2 style="margin-top:16px">About this listing</h2>
        <p>${escapeHTML(agency.description)}</p>

        <h3>Example information categories</h3>
        <ul>
          ${agency.services.map(service =>
            `<li>${escapeHTML(service)}</li>`
          ).join("")}
        </ul>

        <h3>Before contacting an institution</h3>
        <p>
          Verify current authorization through reliable official records.
          Do not send sensitive documents to this demonstration site or
          arrange any process outside authorized legal channels.
        </p>

        <div class="hero-actions" style="margin-top:22px">
          ${link(
            `/contact?agency=${agency.id}`,
            "Ask for guidance →",
            "btn btn-primary"
          )}
          ${link("/agencies", "Back to directory", "btn btn-outline")}
        </div>
      </article>

      <aside class="side-panel">
        <h3>Important information</h3>
        <p>
          This is not a real or verified agency. The card illustrates how
          a production directory could display institution details.
        </p>
        ${link(
          "/resource/official-links",
          "Check official sources →",
          "btn btn-outline btn-full"
        )}
      </aside>
    </section>
  `;
}

/* Resources pages */

function resourcesPage() {
  return `
    ${intro(
      "Guidance you can <em>come back to.</em>",
      "Browse practical, privacy-conscious information and follow official links for current requirements.",
      "Resources"
    )}

    <section class="container section">
      <div class="cards">
        ${resources.map(resource =>
          card(
            "✳",
            resource.title,
            resource.short,
            `/resource/${resource.id}`
          )
        ).join("")}
      </div>
    </section>
  `;
}

function resourceDetail(id) {
  const resource = resources.find(item => item.id === id);

  if (!resource) return notFoundPage();

  return `
    ${intro(
      escapeHTML(resource.title),
      escapeHTML(resource.intro),
      "Resources"
    )}

    <section class="container section detail-layout">
      <article class="content-panel">
        <span class="eyebrow">${escapeHTML(resource.category)}</span>
        <h2>${escapeHTML(resource.title)}</h2>
        <p>${escapeHTML(resource.intro)}</p>

        ${resource.sections.map(section => `
          <h3>${escapeHTML(section.title)}</h3>
          <p>${escapeHTML(section.text)}</p>
        `).join("")}

        ${resource.links ? `
          <h3>Official websites</h3>
          <ul>
            ${resource.links.map(item => `
              <li>
                <a
                  class="text-link"
                  href="${item.url}"
                  target="_blank"
                  rel="noopener noreferrer">
                  ${escapeHTML(item.label)} ↗
                </a>
              </li>
            `).join("")}
          </ul>
        ` : ""}

        <div class="hero-actions" style="margin-top:22px">
          ${link("/resources", "All resources", "btn btn-outline")}
          ${link("/contact", "Ask a general question", "btn btn-primary")}
        </div>
      </article>

      <aside class="side-panel">
        <h3>Related pages</h3>
        <p>
          Explore related guides or return to the adoption process overview.
        </p>
        ${link(
          "/how-it-works",
          "Adoption process →",
          "btn btn-outline btn-full"
        )}
        ${link(
          "/agencies",
          "Find support →",
          "btn btn-quiet btn-full"
        )}
      </aside>
    </section>
  `;
}

/* About and FAQ pages */

function aboutPage() {
  return `
    ${intro(
      "A careful bridge to <em>trusted guidance.</em>",
      "Adopt Connect is a website project concept built to make adoption information easier to understand and help prospective parents locate appropriate authorized support.",
      "About us"
    )}

    <section class="container section">
      <div class="cards">
        ${card(
          "⌕",
          "Clarity",
          "Plain-language educational information that helps users prepare questions.",
          "/resources"
        )}
        ${card(
          "♧",
          "Responsible connections",
          "A directory concept that should show only institutions with authorization checked against official records.",
          "/agencies",
          "gold"
        )}
        ${card(
          "♡",
          "Children's dignity",
          "Privacy-first design that avoids exposing private child records or enabling informal transfers.",
          "/resource/privacy",
          "coral"
        )}
      </div>

      <div class="content-panel" style="margin-top:22px">
        <h2>What this project does — and doesn't do</h2>
        <p>
          Adopt Connect is not a government service, adoption agency or legal
          authority. It cannot approve eligibility, submit an official
          application, select a child or guarantee an outcome. The purpose of
          the project is to guide users toward official information and
          authorized institutions.
        </p>
        ${link(
          "/resource/official-links",
          "Visit official resources →",
          "btn btn-primary"
        )}
      </div>
    </section>
  `;
}

function faqPage() {
  return `
    ${intro(
      "Frequently asked <em>questions.</em>",
      "Find answers about the purpose of Adopt Connect, the directory and how to use this demo safely.",
      "FAQs"
    )}

    <section class="container section">
      <div class="faq-list">
        ${faqs.map((faq, index) => `
          <article class="faq-item ${index === 0 ? "open" : ""}">
            <button
              class="faq-question"
              aria-expanded="${index === 0}"
              data-faq="${index}">
              ${escapeHTML(faq[0])}
              <span>${index === 0 ? "−" : "+"}</span>
            </button>
            <div class="faq-answer">${escapeHTML(faq[1])}</div>
          </article>
        `).join("")}
      </div>

      <div style="margin-top:28px">
        ${link("/contact", "Ask another question →", "btn btn-primary")}
      </div>
    </section>
  `;
}

/* Contact page */

function contactPage() {
  const query = new URLSearchParams(location.hash.split("?")[1] || "");
  const id = Number(query.get("agency"));
  const agency = agencies.find(item => item.id === id);

  return `
    ${intro(
      "Let's start with a <em>question.</em>",
      "Use this demonstration form to see how an inquiry flow could work. It does not send details to an agency.",
      "Contact"
    )}

    <section class="container form-section">
      <div class="form-layout">
        <div class="form-side">
          <span class="eyebrow">NO PRESSURE, JUST A NEXT STEP</span>
          <h2>Ask for general guidance.</h2>
          <p>
            Tell us which topic you want to understand. Do not include
            sensitive documents, identity numbers, medical details, or
            personal information about a child.
          </p>

          <div class="notice">
            This form is a local demo. A real service needs secure data
            handling, clear consent and a privacy policy.
          </div>

          ${link(
            "/resource/privacy",
            "Read privacy guidance →",
            "text-link"
          )}
        </div>

        <form id="inquiryForm" class="form-card" novalidate>
          <h2>Inquiry form</h2>
          <p class="form-subtitle">Fields marked * are required.</p>

          <div class="form-grid">
            <div class="form-field">
              <label for="fullName">Full name *</label>
              <input
                class="form-control"
                id="fullName"
                name="fullName"
                minlength="2"
                required
                autocomplete="name"
                placeholder="Your name">
            </div>

            <div class="form-field">
              <label for="email">Email address *</label>
              <input
                class="form-control"
                id="email"
                type="email"
                required
                autocomplete="email"
                placeholder="you@example.com">
            </div>
          </div>

          <div class="form-field">
            <label for="inquiryType">What would you like help with? *</label>
            <select class="form-control" id="inquiryType" required>
              <option value="">Choose a topic</option>
              <option ${agency ? "selected" : ""}>Finding an authorized agency</option>
              <option>Understanding the adoption process</option>
              <option>Eligibility and documents</option>
              <option>Website feedback</option>
              <option>Other question</option>
            </select>
          </div>

          <div class="form-field">
            <label for="message">Your message *</label>
            <textarea
              class="form-control"
              id="message"
              minlength="10"
              required
              placeholder="Share your question without sensitive information.">${agency
                ? `I'd like general guidance about how to verify the authorization of an institution similar to ${escapeHTML(agency.name)}.`
                : ""}</textarea>
          </div>

          <label class="consent">
            <input type="checkbox" id="consent" required>
            I understand this is a demo and consent to save a basic inquiry
            reference locally. *
          </label>

          <button class="btn btn-primary btn-large btn-full" type="submit">
            Submit demo inquiry ↗
          </button>

          <p class="form-hint">
            No message is sent to an agency. Do not submit sensitive information.
          </p>

          <div id="formResult" class="form-result" role="status" aria-live="polite"></div>
        </form>
      </div>
    </section>
  `;
}

/* Dashboard page */

function dashboardPage() {
  const savedIds = readStore("ac_saved", []);
  const saved = agencies.filter(agency => savedIds.includes(agency.id));
  const inquiries = readStore("ac_inquiries", []);

  return `
    ${intro(
      "Your project <em>dashboard.</em>",
      "Review saved example listings and local demo inquiries. This is not an official adoption application dashboard.",
      "Dashboard"
    )}

    <section class="container section">
      <div class="dashboard-summary">
        <div class="stat-card">
          <small>Saved examples</small>
          <strong>${saved.length}</strong>
        </div>
        <div class="stat-card">
          <small>Demo inquiries</small>
          <strong>${inquiries.length}</strong>
        </div>
        <div class="stat-card">
          <small>Official applications</small>
          <strong>0</strong>
        </div>
      </div>

      <div class="content-panel">
        <h2>Saved institutions</h2>

        ${saved.length
          ? saved.map(agency => `
              <div class="dashboard-item">
                <span>
                  <strong>${escapeHTML(agency.name)}</strong>
                  <small>
                    ${escapeHTML(agency.city)}, ${escapeHTML(agency.state)}
                    · Demo entry, not verified
                  </small>
                </span>
                ${link(`/agency/${agency.id}`, "View →", "text-link")}
              </div>
            `).join("")
          : `<p class="muted">
               You haven't saved any example listings yet. Visit the directory
               and select the heart icon on a card.
             </p>`
        }

        ${link("/agencies", "Browse institutions →", "btn btn-outline")}
      </div>

      <div class="content-panel" style="margin-top:20px">
        <h2>Inquiry history (demo)</h2>

        ${inquiries.length
          ? inquiries.slice().reverse().map(item => `
              <div class="dashboard-item">
                <span>
                  <strong>
                    ${escapeHTML(item.reference)} — ${escapeHTML(item.topic)}
                  </strong>
                  <small>
                    ${escapeHTML(item.date)} · Stored only in this browser
                  </small>
                </span>
                <span class="demo-tag">Demo</span>
              </div>
            `).join("")
          : `<p class="muted">
               No demo inquiries yet. Submitting the contact form creates
               a local reference that appears here.
             </p>`
        }
      </div>
    </section>
  `;
}

/* Login demonstration page */

function loginPage() {
  return `
    ${intro(
      "Welcome to <em>Adopt Connect.</em>",
      "This sign-in page demonstrates the proposed interface. It does not create or authenticate a real account.",
      "Log in"
    )}

    <section class="container form-section">
      <div class="form-layout">
        <div class="form-side">
          <span class="eyebrow">ACCOUNT ACCESS DEMO</span>
          <h2>A more personal way to keep track.</h2>
          <p>
            A production platform should use secure authentication and separate
            permissions for prospective parents, authorized institution
            representatives and administrators.
          </p>
          ${link("/dashboard", "Preview dashboard →", "btn btn-outline")}
        </div>

        <form id="loginForm" class="form-card" novalidate>
          <h2>Sign in</h2>
          <p class="form-subtitle">Demo only — no account is required.</p>

          <div class="form-field">
            <label for="loginEmail">Email address</label>
            <input
              class="form-control"
              id="loginEmail"
              type="email"
              required
              placeholder="you@example.com">
          </div>

          <div class="form-field">
            <label for="loginPassword">Password</label>
            <input
              class="form-control"
              id="loginPassword"
              type="password"
              required
              minlength="4"
              placeholder="Enter a demo password">
          </div>

          <button class="btn btn-primary btn-large btn-full" type="submit">
            Continue →
          </button>

          <div id="loginResult" class="form-result" role="status"></div>

          <p class="form-hint">
            This is not real authentication. Do not use a real password here.
          </p>
        </form>
      </div>
    </section>
  `;
}

function notFoundPage() {
  return `
    ${intro(
      "This page could not be found.",
      "The page may have moved or the link may be incorrect.",
      "Page not found"
    )}

    <section class="container section">
      <div class="content-panel">
        <h2>Let's get you back on track.</h2>
        <p>Choose an area below to keep exploring Adopt Connect.</p>

        <div class="hero-actions" style="margin-top:20px">
          ${link("/home", "Go home", "btn btn-primary")}
          ${link("/agencies", "Find support", "btn btn-outline")}
          ${link("/resources", "Browse resources", "btn btn-outline")}
        </div>
      </div>
    </section>
  `;
}

/* Main router: renders the appropriate page */

function render() {
  const { path, parts } = routeInfo();

  document.body.classList.toggle(
    "dark-theme",
    readStore("ac_dark", false)
  );

  let content;

  if (path === "/home" || path === "/") {
    content = homePage();
  } else if (path === "/how-it-works") {
    content = howItWorksPage();
  } else if (path === "/agencies") {
    content = agenciesPage();
  } else if (parts[0] === "agency" && parts[1]) {
    content = agencyDetail(parts[1]);
  } else if (parts[0] === "process" && parts[1]) {
    content = processDetail(parts[1]);
  } else if (path === "/resources") {
    content = resourcesPage();
  } else if (parts[0] === "resource" && parts[1]) {
    content = resourceDetail(parts[1]);
  } else if (path === "/about") {
    content = aboutPage();
  } else if (path === "/faq") {
    content = faqPage();
  } else if (path === "/contact") {
    content = contactPage();
  } else if (path === "/dashboard") {
    content = dashboardPage();
  } else if (path === "/login") {
    content = loginPage();
  } else {
    content = notFoundPage();
  }

  app.innerHTML = layout(content, path);

  document.title = `${pageTitle(path, parts)} | Adopt Connect`;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  bindPageEvents(path);

  if (path === "/agencies") {
    renderAgencyCards();
  }
}

function pageTitle(path, parts) {
  if (path === "/home" || path === "/") {
    return "Connecting Hearts, Building Families";
  }

  if (path === "/how-it-works") return "How it works";
  if (path === "/agencies") return "Find support";

  if (parts[0] === "agency") {
    return agencies.find(item => item.id === Number(parts[1]))?.name
      || "Institution details";
  }

  if (parts[0] === "process") {
    return processSteps.find(item => item.id === parts[1])?.title
      || "Adoption process";
  }

  if (path === "/resources") return "Resources";

  if (parts[0] === "resource") {
    return resources.find(item => item.id === parts[1])?.title || "Resource";
  }

  return {
    "/about": "About us",
    "/faq": "FAQs",
    "/contact": "Contact",
    "/dashboard": "My dashboard",
    "/login": "Log in"
  }[path] || "Page not found";
}

/* Page interactions */

function bindPageEvents() {
  const toggle = $("#menuToggle");
  const nav = $("#mainNav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");

      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "×" : "☰";
    });
  }

  const theme = $("#themeToggle");

  if (theme) {
    theme.addEventListener("click", () => {
      const dark = !document.body.classList.contains("dark-theme");

      document.body.classList.toggle("dark-theme", dark);
      writeStore("ac_dark", dark);

      showToast(dark ? "Dark theme enabled." : "Light theme enabled.");
    });
  }

  ["#agencySearch", "#stateFilter", "#sortAgencies"].forEach(selector => {
    const element = $(selector);

    if (element) {
      const eventName = selector === "#agencySearch" ? "input" : "change";
      element.addEventListener(eventName, renderAgencyCards);
    }
  });

  const clearButton = $("#clearFilters");

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      $("#agencySearch").value = "";
      $("#stateFilter").value = "";
      $("#sortAgencies").value = "name";

      renderAgencyCards();
      showToast("Filters cleared.");
    });
  }

  const grid = $("#agencyGrid");

  if (grid) {
    grid.addEventListener("click", event => {
      const button = event.target.closest("[data-save]");

      if (!button) return;

      const id = Number(button.dataset.save);
      let saved = readStore("ac_saved", []);

      saved = saved.includes(id)
        ? saved.filter(item => item !== id)
        : [...saved, id];

      writeStore("ac_saved", saved);
      renderAgencyCards();

      showToast(
        saved.includes(id)
          ? "Institution saved in this browser."
          : "Institution removed from saved items."
      );
    });
  }

  $$("[data-faq]").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const open = item.classList.toggle("open");

      button.setAttribute("aria-expanded", String(open));
      $("span", button).textContent = open ? "−" : "+";
    });
  });

  const inquiryForm = $("#inquiryForm");

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", submitInquiry);
  }

  const loginForm = $("#loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", submitLogin);
  }
}

/* Contact form: validates and saves a demo reference in the browser */

function submitInquiry(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const result = $("#formResult");

  result.classList.remove("show", "error");

  const fields = [
    $("#fullName"),
    $("#email"),
    $("#inquiryType"),
    $("#message")
  ];

  let firstInvalid = null;

  fields.forEach(field => {
    field.classList.remove("invalid");

    if (!field.checkValidity()) {
      field.classList.add("invalid");

      if (!firstInvalid) {
        firstInvalid = field;
      }
    }
  });

  const consent = $("#consent");

  if (!consent.checked) {
    showFormResult(
      result,
      "Please agree to the consent statement before submitting.",
      true
    );

    if (!firstInvalid) {
      firstInvalid = consent;
    }
  }

  if (firstInvalid) {
    firstInvalid.focus();

    if (firstInvalid !== consent) {
      showFormResult(
        result,
        "Please check the highlighted fields and try again.",
        true
      );
    }

    return;
  }

  const reference =
    "AC-" + Math.random().toString(36).slice(2, 7).toUpperCase();

  const inquiries = readStore("ac_inquiries", []);

  inquiries.push({
    reference,
    topic: $("#inquiryType").value,
    date: new Date().toLocaleDateString()
  });

  writeStore("ac_inquiries", inquiries);

  showFormResult(
    result,
    `Thank you, ${$("#fullName").value.trim()}. Your demo reference is ${reference}. No message was sent to an agency.`
  );

  form.reset();
  showToast("Demo inquiry saved locally.");
}

function showFormResult(element, message, isError = false) {
  element.textContent = message;
  element.classList.add("show");
  element.classList.toggle("error", isError);
}

/* Login form: demonstration only */

function submitLogin(event) {
  event.preventDefault();

  const email = $("#loginEmail");
  const password = $("#loginPassword");
  const result = $("#loginResult");

  result.classList.remove("show", "error");

  const invalid = [email, password].find(
    field => !field.checkValidity()
  );

  if (invalid) {
    invalid.classList.add("invalid");
    invalid.focus();

    showFormResult(
      result,
      "Enter a valid email and a password of at least 4 characters.",
      true
    );

    return;
  }

  showFormResult(
    result,
    "Demo only: the form validates input but does not authenticate an account. Use the dashboard link to preview another page."
  );
}

/* Browser Back and Forward navigation */

window.addEventListener("hashchange", render);

if (!location.hash) {
  location.hash = "#/home";
} else {
  render();
}