function openRegion() {
    document.getElementById('regionPopup').classList.remove('hidden')
    document.getElementById('regionPopup').classList.add('flex')
  }

function closeRegion() {
    document.getElementById('regionPopup').classList.add('hidden')
    document.getElementById('regionPopup').classList.remove('flex')
  }

document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     FIX HEADER ON SCROLL
  ========================= */
  const header = document.getElementById('mainHeader')
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('fixed', window.scrollY > 80)
      header.classList.toggle('top-0', window.scrollY > 80)
      header.classList.toggle('left-0', window.scrollY > 80)
      header.classList.toggle('w-full', window.scrollY > 80)
      header.classList.toggle('z-50', window.scrollY > 80)
      header.classList.toggle('shadow-sm', window.scrollY > 80)
    })
  }

  /* =========================
     ACTIVE MENU
  ========================= */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html'

  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('href')?.split('/').pop()
    if (linkPage === currentPage) {
      link.classList.add('text-[#1e7f3e]', 'font-semibold')
      if (!link.querySelector('.nav-underline')) {
        link.insertAdjacentHTML(
          'beforeend',
          `<span class="nav-underline absolute left-0 bottom-0 w-full h-[2px] bg-[#1e7f3e]"></span>`
        )
      }
    }
  })

  /* =========================
     MOBILE NAV
  ========================= */
  const btn = document.getElementById('mobileBtn')
  const mobileNav = document.getElementById('mobileNav')

  if (btn && mobileNav) {
    btn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden')
    })

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden')
      })
    })
  }

/* =========================
   FILTER (BERITA / PRODUK)
========================= */
const filterBtn = document.getElementById('filterBtn')
const categoryFilter = document.getElementById('categoryFilter')
const cards = document.querySelectorAll('.news-card')

if (filterBtn && categoryFilter && cards.length) {
  filterBtn.addEventListener('click', () => {
    const val = categoryFilter.value

    cards.forEach(card => {
      const categories = card.dataset.category
        .split(',')
        .map(c => c.trim())

      card.classList.toggle(
        'hidden',
        val !== 'all' && !categories.includes(val)
      )
    })
  })
}

  /* =========================
     HERO SLIDER
  ========================= */
  const slides = document.querySelectorAll('.hero-slide')
  const dots = document.querySelectorAll('.dot')

  if (slides.length) {
    let current = 0

    function showSlide(next) {
      slides.forEach(s => s.classList.remove('active', 'prev'))
      dots.forEach(d => d.classList.remove('active'))

      slides[current].classList.add('prev')
      slides[next].classList.add('active')
      if (dots[next]) dots[next].classList.add('active')

      current = next
    }

    setInterval(() => {
      showSlide((current + 1) % slides.length)
    }, 4000)

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => showSlide(i))
    })
  }

  /* =========================
     JOB DETAIL (KARIR)
  ========================= */
  const jobItems = document.querySelectorAll('.job-item')
  const jobTitle = document.getElementById('jobTitle')

  if (jobItems.length && jobTitle) {
    jobItems.forEach(item => {
      item.addEventListener('click', () => {
        jobItems.forEach(i => i.classList.remove('border-green-700', 'bg-green-50'))
        item.classList.add('border-green-700', 'bg-green-50')

        jobTitle.textContent = item.dataset.title || ''
      })
    })
  }

  /* =========================
     MODAL APPLY JOB
  ========================= */
  const applyBtn = document.querySelector('[data-apply]')
  const modal = document.getElementById('applyModal')
  const closeModal = document.getElementById('closeModal')

  if (applyBtn && modal) {
    applyBtn.addEventListener('click', () => modal.classList.remove('hidden'))
  }

  if (closeModal && modal) {
    closeModal.addEventListener('click', () => modal.classList.add('hidden'))
  }

})
