const accessibilityOptions = {
  resetTitle: "Qaytarish",
  closeTitle: "Yoping",
  menuTitle: 'Sarlavha',
  increaseText: 'Matn hajmini oshirish',
  decreaseText: 'Matn hajmini kamaytirish',
  increaseTextSpacing: "Matn oralig'ini oshirish",
  decreaseTextSpacing: "Matn oralig'ini kamaytirish",
  invertColors: "Teskari ranglar",
  grayHues: "Kulrang ranglar",
  underlineLinks: "Ishoratlar ostiga chizish",
  bigCursor: 'Katta kursor',
  readingGuide: "O'qish uchun qo'llanma",
  textToSpeech: "Nutqqa matn",
  speechToText: "Matnga nutq"
}

window.addEventListener('load', function() {
  new Accessibility({
    labels: accessibilityOptions,
    textToSpeechLang: 'uz',
    speechToTextLang: 'uz',
    icon: {
      position: {
        bottom: { size: 50, units: 'px' },
        right: { size: 0, units: 'px' },
        type: 'fixed'
      }
    }
  })
}, false)
