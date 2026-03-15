// Sound system removed - clean and simple website
const soundSystem = null;

function setupSoundEffects() {
  // No sound effects - clean experience
  console.log('🌌 Website loaded without sound effects');
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    padding: 12px 16px;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(10px);
    color: rgba(247,244,255,0.9);
    border-radius: 8px;
    font-size: 14px;
    z-index: 1001;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.2s ease;
  `;
  
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 10);
  
  // Remove after 2 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 200);
  }, 2000);
}

function setupScrollAnimations() {
  // Create scroll indicator
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'scroll-indicator';
  scrollIndicator.innerHTML = `
    <span>Scroll</span>
    <div class="arrow"></div>
  `;
  document.body.appendChild(scrollIndicator);

  // Create Saturnus di dalam container foto
  const saturnusContainer = document.createElement('div');
  saturnusContainer.className = 'saturnus-container';
  saturnusContainer.innerHTML = `
    <div class="saturnus-planet">
      <div class="saturnus-body"></div>
      <div class="saturnus-rings"></div>
      <div class="saturnus-shadow"></div>
    </div>
  `;
  
  // Cari container foto dan tambahkan Saturnus
  const profileSection = document.querySelector('.profile-section, .profile, .about__profile, .hero__profile');
  if (profileSection) {
    profileSection.appendChild(saturnusContainer);
    console.log('✅ Saturnus ditambahkan ke container foto');
  } else {
    // Fallback: tambahkan ke section pertama yang ada
    const firstSection = document.querySelector('section');
    if (firstSection) {
      firstSection.style.position = 'relative';
      firstSection.appendChild(saturnusContainer);
      console.log('✅ Saturnus ditambahkan ke section pertama');
    }
  }

  // Create space images container
  const spaceImagesContainer = document.createElement('div');
  spaceImagesContainer.className = 'space-images';
  spaceImagesContainer.innerHTML = `
    <div class="space-image galaxy-1"></div>
    <div class="space-image galaxy-2"></div>
    <div class="space-image planet-1"></div>
    <div class="space-image planet-2"></div>
    <div class="space-image nebula"></div>
  `;
  document.body.appendChild(spaceImagesContainer);

  // Create Bima Sakti Galaxy System
  const bimaSaktiSystem = document.createElement('div');
  bimaSaktiSystem.className = 'bima-sakti-system';
  bimaSaktiSystem.innerHTML = `
    <div class="bima-sakti-galaxy"></div>
    <div class="bima-sakti-sun"></div>
    <div class="bima-sakti-orbit bima-sakti-orbit-1">
      <div class="bima-sakti-planet bima-sakti-planet-1"></div>
    </div>
    <div class="bima-sakti-orbit bima-sakti-orbit-2">
      <div class="bima-sakti-planet bima-sakti-planet-2"></div>
    </div>
    <div class="bima-sakti-orbit bima-sakti-orbit-3">
      <div class="bima-sakti-planet bima-sakti-planet-3"></div>
    </div>
  `;
  document.body.appendChild(bimaSaktiSystem);

  // Create floating particles container
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'floating-particles';
  document.body.appendChild(particlesContainer);

  // Create floating particles
  function createParticles() {
    particlesContainer.innerHTML = '';
    const particleCount = 4; // Dikurangi lagi dari 8 jadi 4
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (15 + Math.random() * 10) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  // Check screen height and show/hide elements
  function checkScreenHeight() {
    const screenHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const hasScroll = scrollHeight > screenHeight;
    const scrollPercent = window.scrollY / (scrollHeight - screenHeight);

    // Show scroll indicator if there's content to scroll
    if (hasScroll) {
      scrollIndicator.classList.add('show');
    } else {
      scrollIndicator.classList.remove('show');
    }

    // Always create particles for all screen sizes
    createParticles();

    // Show Bima Sakti when scrolled down
    if (scrollPercent > 0.3) { // Show when scrolled 30% down
      bimaSaktiSystem.classList.add('visible');
    } else {
      bimaSaktiSystem.classList.remove('visible');
    }
  }

  // Initial check
  checkScreenHeight();

  // Recheck on resize
  window.addEventListener('resize', checkScreenHeight);

  // Hide scroll indicator when user starts scrolling
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    scrollIndicator.classList.remove('show');
    
    // Update Bima Sakti visibility based on scroll
    const scrollHeight = document.documentElement.scrollHeight;
    const screenHeight = window.innerHeight;
    const scrollPercent = window.scrollY / (scrollHeight - screenHeight);
    
    if (scrollPercent > 0.3) {
      bimaSaktiSystem.classList.add('visible');
    } else {
      bimaSaktiSystem.classList.remove('visible');
    }
    
    // Show again after stopping scroll
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      checkScreenHeight();
    }, 2000);
  });

  // Add extra content section for all screens
  function addExtraContent() {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    const existingExtra = document.querySelector('.extra-content');
    if (existingExtra) return;

    const extraContent = document.createElement('div');
    extraContent.className = 'extra-content';
    extraContent.innerHTML = `
      <div class="container">
        <div class="sectionHead">
          <h2 class="h2 reveal">Explore the Galaxy</h2>
          <p class="sub reveal">Keep scrolling to discover more wonders</p>
        </div>
        <div class="grid grid--3">
          <div class="card reveal">
            <h3 class="h3">🌟 Journey Continues</h3>
            <p class="p">Every achievement is a stepping stone to greater heights.</p>
          </div>
          <div class="card reveal">
            <h3 class="h3">🚀 Infinite Possibilities</h3>
            <p class="p">The universe of knowledge is endless and waiting to be explored.</p>
          </div>
          <div class="card reveal">
            <h3 class="h3">💫 Dreams Take Flight</h3>
            <p class="p">Where ambition meets opportunity, magic happens.</p>
          </div>
        </div>
      </div>
    `;
    
    footer.parentNode.insertBefore(extraContent, footer);
  }

  // Always add extra content for all screen sizes
  addExtraContent();
}

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function setHeaderElevation() {
  const header = $(".header");
  if (!header) return;
  const elevated = window.scrollY > 6;
  header.setAttribute("data-elevate", elevated ? "true" : "false");
}

function setupMobileNav() {
  const toggle = $("[data-nav-toggle]");
  const panel = $("[data-nav-panel]");
  const links = $$("[data-nav-link]");
  if (!toggle || !panel) return;

  const setOpen = (open) => {
    panel.dataset.open = open ? "true" : "false";
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  setOpen(false);

  toggle.addEventListener("click", () => {
    const open = panel.dataset.open !== "true";
    setOpen(open);
  });

  links.forEach((a) =>
    a.addEventListener("click", () => {
      setOpen(false);
    }),
  );

  document.addEventListener("click", (e) => {
    if (panel.dataset.open !== "true") return;
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (panel.contains(target) || toggle.contains(target)) return;
    setOpen(false);
  });
}

function setupActiveNav() {
  const links = $$("[data-nav-link]");
  if (!links.length) return;

  // Multi-page mode: highlight current page link (e.g., about.html)
  const currentFile = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const pageLinks = links.filter((a) => {
    const href = (a.getAttribute("href") || "").trim().toLowerCase();
    return href && !href.startsWith("#");
  });

  if (pageLinks.length) {
    links.forEach((a) => a.removeAttribute("aria-current"));
    pageLinks.forEach((a) => {
      const href = (a.getAttribute("href") || "").trim().toLowerCase();
      const file = href.split("/").pop();
      if (file === currentFile) a.setAttribute("aria-current", "page");
    });
    return;
  }

  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute("href")?.slice(1);
    const section = id ? document.getElementById(id) : null;
    if (section) map.set(section, a);
  });

  const clear = () => links.forEach((a) => a.removeAttribute("aria-current"));

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
      if (!visible?.target) return;
      clear();
      const a = map.get(visible.target);
      if (a) a.setAttribute("aria-current", "page");
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.25, 0.6] },
  );

  map.forEach((_, section) => io.observe(section));
}

function setupGalleryModal() {
  const modal = $("[data-modal]");
  const modalImg = $("[data-modal-img]");
  const closeBtn = $("[data-modal-close]");
  const items = $$("[data-gallery] .galleryItem");

  if (!modal || !modalImg || !items.length) return;

  const open = (src, alt) => {
    modalImg.src = src;
    modalImg.alt = alt || "Preview";
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  };

  const close = () => {
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
    modalImg.src = "";
  };

  items.forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-src");
      const img = $("img", btn);
      const alt = img?.getAttribute("alt") || "Gallery image";
      if (src) open(src, alt);
    });
  });

  closeBtn?.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function setupContactMailto() {
  const form = $("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Contact from ${name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    );

    // TODO: ganti ke email kamu
    const to = "you@email.com";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

function setupProfileBinding() {
  const nameSource = $("[data-profile-name]");
  const taglineSource = $("[data-profile-tagline]");

  const fallbackName =
    ($("[data-bio-name]")?.textContent || "").trim() ||
    ($("[data-footer-name]")?.textContent || "").trim();

  const name =
    (nameSource?.textContent || "").trim() ||
    fallbackName ||
    "INTAN PERTIWI";
  const tagline =
    (taglineSource?.textContent || "").trim() ||
    "Tagline kamu di sini — singkat, confident, dan keren.";

  $$("[data-profile-name], [data-bio-name], [data-footer-name]").forEach(
    (el) => (el.textContent = name),
  );
  $$("[data-profile-tagline]").forEach((el) => (el.textContent = tagline));

  const wrap = $(".hero__nameWrap");
  const ghosts = $$(".hero__nameGhost", wrap || document);
  ghosts.forEach((el) => (el.textContent = name));
}

function setupRevealOnScroll() {
  const els = $$(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        if (el instanceof HTMLElement) el.classList.add("is-in");
        io.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  els.forEach((el) => io.observe(el));
}

function setupNameGlitchLoop() {
  const wrap = $(".hero__nameWrap");
  if (!wrap) return;

  const tick = () => {
    wrap.dataset.glitch = "on";
    window.setTimeout(() => {
      delete wrap.dataset.glitch;
    }, 520);

    const next = 2600 + Math.floor(Math.random() * 2200);
    window.setTimeout(tick, next);
  };

  window.setTimeout(tick, 900);
}

function setupGalaxyBackground() {
  const canvas = document.getElementById('galaxyCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  // More distributed particle system
  const particles = [];
  const shootingStars = [];
  const numParticles = 80; // Dikurangi lagi dari 150 jadi 80
  const numShootingStars = 5;
  
  // Create particles distributed across multiple clusters
  const particleCount = 80; // Dikurangi lagi dari 150 jadi 80
  const clusterCenters = [
    { x: width * 0.2, y: height * 0.3 }, // Top-left cluster
    { x: width * 0.8, y: height * 0.2 }, // Top-right cluster
    { x: width * 0.5, y: height * 0.7 }, // Bottom-center cluster
    { x: width * 0.3, y: height * 0.8 }  // Bottom-left cluster
  ];
  
  for (let i = 0; i < numParticles; i++) {
    const clusterId = Math.floor(Math.random() * 4);
    const cluster = clusterCenters[clusterId];
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 150 + 50;
    
    particles.push({
      x: cluster.x + Math.cos(angle) * distance,
      y: cluster.y + Math.sin(angle) * distance,
      baseX: cluster.x + Math.cos(angle) * distance,
      baseY: cluster.y + Math.sin(angle) * distance,
      size: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.3 + 0.1,
      driftX: (Math.random() - 0.5) * 0.2,
      driftY: (Math.random() - 0.5) * 0.2,
      brightness: Math.random() * 0.7 + 0.3,
      color: Math.random() > 0.6 ? '255,45,166' : Math.random() > 0.3 ? '124,77,255' : '247,244,255',
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.03 + 0.01
    });
  }
  
  // Create shooting stars with more natural paths
  for (let i = 0; i < numShootingStars; i++) {
    shootingStars.push({
      x: Math.random() * width,
      y: Math.random() * height * 0.4,
      vx: Math.random() * 6 + 3,
      vy: Math.random() * 3 + 1,
      length: Math.random() * 60 + 30,
      opacity: 0,
      targetOpacity: Math.random() * 0.6 + 0.2,
      active: false,
      cooldown: Math.random() * 4000 + 2000
    });
  }
  
  let mouseX = width / 2;
  let mouseY = height / 2;
  let time = 0;
  let animationId;
  
  // Mouse interaction
  canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animate(currentTime) {
    animationId = requestAnimationFrame(animate);
    time += 0.01;
    
    // Gentle fade
    ctx.fillStyle = 'rgba(5,4,11,0.08)';
    ctx.fillRect(0, 0, width, height);
    
    // Draw subtle nebula clouds (more distributed)
    const nebulaTime = time * 0.3;
    for (let i = 0; i < 4; i++) {
      const x = width * (0.2 + i * 0.2) + Math.cos(nebulaTime + i) * 100;
      const y = height * (0.3 + Math.sin(nebulaTime + i) * 0.2);
      
      const nebulaGradient = ctx.createRadialGradient(x, y, 0, x, y, 120);
      const colors = [
        ['255,45,166', 0.15],
        ['124,77,255', 0.12],
        ['255,91,208', 0.1],
        ['255,255,255', 0.08]
      ];
      
      nebulaGradient.addColorStop(0, `rgba(${colors[i][0]}, ${colors[i][1]})`);
      nebulaGradient.addColorStop(0.6, `rgba(${colors[i][0]}, ${colors[i][1] * 0.4})`);
      nebulaGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = nebulaGradient;
      ctx.fillRect(0, 0, width, height);
    }
    
    // Update and draw distributed particles
    particles.forEach(particle => {
      // Gentle drift motion
      particle.x += particle.driftX + Math.sin(time * 2 + particle.twinkle) * 0.5;
      particle.y += particle.driftY + Math.cos(time * 2 + particle.twinkle) * 0.5;
      
      // Wrap around screen edges
      if (particle.x < -50) particle.x = width + 50;
      if (particle.x > width + 50) particle.x = -50;
      if (particle.y < -50) particle.y = height + 50;
      if (particle.y > height + 50) particle.y = -50;
      
      // Twinkle effect
      const twinkle = (Math.sin(particle.twinkle) + 1) / 2;
      particle.twinkle += particle.twinkleSpeed;
      
      // Subtle mouse interaction
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const mouseDistance = Math.sqrt(dx * dx + dy * dy);
      const mouseEffect = Math.max(0, 1 - mouseDistance / 300);
      
      // Draw particle with gentle glow
      const size = particle.size * (1 + mouseEffect * 0.3);
      const opacity = particle.brightness * twinkle * (0.7 + mouseEffect * 0.3);
      
      // Subtle glow
      const glowGradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, size * 2
      );
      glowGradient.addColorStop(0, `rgba(${particle.color}, ${opacity})`);
      glowGradient.addColorStop(0.5, `rgba(${particle.color}, ${opacity * 0.3})`);
      glowGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = glowGradient;
      ctx.fillRect(particle.x - size * 2, particle.y - size * 2, size * 4, size * 4);
      
      // Core particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particle.color}, ${opacity})`;
      ctx.fill();
    });
    
    // Update and draw shooting stars (less frequent)
    shootingStars.forEach(star => {
      star.cooldown--;
      
      if (star.cooldown <= 0 && !star.active) {
        star.active = true;
        star.x = Math.random() * width;
        star.y = Math.random() * height * 0.3;
        star.vx = Math.random() * 6 + 3;
        star.vy = Math.random() * 3 + 1;
        star.opacity = 0;
      }
      
      if (star.active) {
        star.x += star.vx;
        star.y += star.vy;
        star.opacity = Math.min(star.targetOpacity, star.opacity + 0.03);
        
        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x - star.vx * 8, star.y - star.vy * 8
        );
        gradient.addColorStop(0, `rgba(255,255,255, ${star.opacity})`);
        gradient.addColorStop(0.4, `rgba(255,91,208, ${star.opacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.vx * 8, star.y - star.vy * 8);
        ctx.stroke();
        
        // Reset if out of bounds
        if (star.x > width + 50 || star.y > height + 50) {
          star.active = false;
          star.cooldown = Math.random() * 6000 + 3000;
        }
      }
    });
  }
  
  animate(0);
  
  // Handle resize with debouncing
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, 250);
  });
  
  // Pause animation when page is not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate(0);
    }
  });
}

setHeaderElevation();
window.addEventListener("scroll", setHeaderElevation, { passive: true });

setupMobileNav();
setupActiveNav();
setupGalleryModal();
setupContactMailto();
setupProfileBinding();
setupRevealOnScroll();
setupNameGlitchLoop();
setupGalaxyBackground();
setupSoundEffects();
setupScrollAnimations();

// Initialize custom sound
soundSystem.loadCustomSound();

