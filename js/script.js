function openRegion() {
    document.getElementById('regionPopup').classList.remove('hidden')
    document.getElementById('regionPopup').classList.add('flex')
  }

function closeRegion() {
    document.getElementById('regionPopup').classList.add('hidden')
    document.getElementById('regionPopup').classList.remove('flex')
  }

// ===== FIX HEADER ON SCROLL =====
  const header = document.getElementById('mainHeader')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add(
        'fixed',
        'top-0',
        'left-0',
        'w-full',
        'z-50',
        'shadow-sm'
      )
    } else {
      header.classList.remove(
        'fixed',
        'top-0',
        'left-0',
        'w-full',
        'z-50',
        'shadow-sm'
      )
    }
  })

// ===== ACTIVE MENU BY URL =====
const currentPage = window.location.pathname.split('/').pop()

// DESKTOP NAV
document.querySelectorAll('.nav-link').forEach(link => {
  const linkPage = link.getAttribute('href').split('/').pop()

  if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
    link.classList.add('text-[#1e7f3e]', 'font-semibold')

    if (!link.querySelector('.nav-underline')) {
      link.insertAdjacentHTML(
        'beforeend',
        `<span class="nav-underline absolute left-0 bottom-0 w-full h-[2px] bg-[#1e7f3e]"></span>`
      )
    }
  }
})

// MOBILE NAV
document.querySelectorAll('.mobile-link').forEach(link => {
  const linkPage = link.getAttribute('href').split('/').pop()

  if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
    link.classList.add('text-[#1e7f3e]', 'font-semibold')
  }
})

  // auto close saat klik menu
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden')
    })
  })

//Mobile Button 
const btn = document.getElementById('mobileBtn')
  const mobileNav = document.getElementById('mobileNav')

  btn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden')
  })

  // auto close saat klik menu
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden')
    })
  })

// FILTER
const filterBtn = document.getElementById('filterBtn')
const categoryFilter = document.getElementById('categoryFilter')
const newsCards = document.querySelectorAll('.news-card')

filterBtn.addEventListener('click', () => {
  const selectedCategory = categoryFilter.value

  newsCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category')

    if (selectedCategory === 'all' || cardCategory === selectedCategory) {
      card.classList.remove('hidden')
    } else {
      card.classList.add('hidden')
    }
  })
})

// categoryFilter.addEventListener('change', () => {
//   filterBtn.click()
// })


//JOB DETAIL KARIR
document.addEventListener('DOMContentLoaded', () => {

  const jobItems = document.querySelectorAll('.job-item')
  const filterBtn = document.getElementById('jobFilterBtn')
  const regionFilter = document.getElementById('regionFilter')

  const jobTitle = document.getElementById('jobTitle')
  const jobType = document.getElementById('jobType')
  const jobLocation = document.getElementById('jobLocation')
  const jobExperience = document.getElementById('jobExperience')
  const jobOpenings = document.getElementById('jobOpenings')
  const jobOverview = document.getElementById('jobOverview')
  const jobResponsibilities = document.getElementById('jobResponsibilities')

  function loadJob(item) {
    jobItems.forEach(i =>
      i.classList.remove('border-green-700', 'bg-green-50')
    )

    item.classList.add('border-green-700', 'bg-green-50')

    jobTitle.textContent = item.dataset.title
    jobType.textContent = item.dataset.type
    jobLocation.textContent = item.dataset.location
    jobExperience.textContent = item.dataset.experience
    jobOpenings.textContent = item.dataset.openings
    jobOverview.textContent = item.dataset.overview

    jobResponsibilities.innerHTML = ''
    item.dataset.responsibilities.split('|').forEach(res => {
      const li = document.createElement('li')
      li.textContent = res
      jobResponsibilities.appendChild(li)
    })
  }

  jobItems.forEach(item => {
    item.addEventListener('click', () => loadJob(item))
  })

  filterBtn.addEventListener('click', () => {
    const region = regionFilter.value

    jobItems.forEach(item => {
      if (region === 'all' || item.dataset.region === region) {
        item.classList.remove('hidden')
      } else {
        item.classList.add('hidden')
      }
    })
  })

  // Auto load first job
  if (jobItems.length) {
    loadJob(jobItems[0])
  }

})

//APPLY KARIR
const applyBtn = document.querySelector('.bg-green-700') // tombol APPLY job
const modal = document.getElementById('applyModal')
const closeModal = document.getElementById('closeModal')

const resumeInput = document.getElementById('resumeInput')
const resumeName = document.getElementById('resumeName')
const sendEmailBtn = document.getElementById('sendEmail')

// OPEN MODAL
applyBtn.addEventListener('click', () => {
  modal.classList.remove('hidden')
  modal.classList.add('flex')
})

// CLOSE MODAL
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden')
})

// SHOW FILE NAME
resumeInput.addEventListener('change', () => {
  if (resumeInput.files.length > 0) {
    resumeName.textContent = `File dipilih: ${resumeInput.files[0].name}`
    resumeName.classList.remove('hidden')
  }
})

// SEND EMAIL (mailto)
sendEmailBtn.addEventListener('click', () => {
  const subject = encodeURIComponent('Lamaran Pekerjaan - Neo Crop Solutions')
  const body = encodeURIComponent(
    'Halo HR Neo Crop Solutions,\n\nSaya ingin mengajukan lamaran pekerjaan.\n\nTerima kasih.'
  )

  window.location.href =
    `mailto:andikarahmathidayatulloh@gmail.com?subject=${subject}&body=${body}`
})

