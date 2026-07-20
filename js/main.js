const CA = '6wCpTaxLmCeBdsazRebYNHtFNC1mPJDWKscHHVwkpump'

const copyButton = document.querySelector('#copy-ca')
const caEl = document.querySelector('#ca')

async function copyAddress() {
  if (!copyButton) return

  try {
    await navigator.clipboard.writeText(CA)
  } catch {
    const range = document.createRange()
    range.selectNodeContents(caEl)
    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
    document.execCommand('copy')
    selection.removeAllRanges()
  }

  copyButton.textContent = 'Copied'
  copyButton.classList.add('is-copied')
  window.setTimeout(() => {
    copyButton.textContent = 'Copy'
    copyButton.classList.remove('is-copied')
  }, 1600)
}

copyButton?.addEventListener('click', copyAddress)

const reveals = document.querySelectorAll('.reveal')

if (reveals.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
  )

  reveals.forEach((el) => observer.observe(el))
} else {
  reveals.forEach((el) => el.classList.add('is-visible'))
}
