/**
 * Interactive Love Letter Experience
 * Plain vanilla ES6+ JavaScript.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check if reduced motion is requested
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================
     1. Letter Content (Single Continuous List)
     ========================================== */
  const letterParagraphs = [
    "Helloooooooo my babi, baby, and lovelovee.",
    "I don't know what happened. Suddenly, it felt like there's a gap between us, but yeah, I think I'm just imagining things.",
    "Remember the first time na nag-usap tayo sa Litmatch? It was fun for me. I enjoyed every minute talking to you. It felt like, \"Hey, I think I love this girl.\" Pero yeah, nakwento mo na kakagaling mo lang sa breakup, so I held back a little while.",
    "Then kinabukasan, you wanted to YAPPPPPPPPPPP again, like a lottttttt, so I said sure since naeenjoy ko rin yung yapping sessions natin that time. Then ayun, pumunta na tayo sa IG.",
    "That time, I was already falling in love with you. Hindi ko pa sinabi for soooooo long. Why? I needed to make sure that what I was feeling was real and hindi lang infatuation. That's why I said to myself, \"Okay, let's take things slowly,\" because I wanted to love you genuinely.",
    "Yung mga parinig mo? Yes, alam ko 'yon. Pero ayun nga, sabi ko, let's take things slowly para alam kong totoo lahat ng nararamdaman ko at wala akong kailangang i-fake.",
    "Then ayun, we went through a lot. Ang daming bonding, ang daming beses kitang natulugan, tapos yung landian natin. Until dumating sa point na sure na talaga ako sa nararamdaman ko. Na, \"Hey, mahal ko na talaga siya.\" Nagseselos na ako kahit wala naman akong karapatan.",
    "Then ayun, I started going crazy. I kept overthinking things that I shouldn't have.",
    "I love you, baby, okay? I really love you.",
    "Sabi ko, I'll wait. Okay lang. Kaya ko 'to. Pero ayun nga... I think I'm too late na.",
    "Alam mo, babi, sobrang sakit nung sinabi mong you've been eyeing someone these past few days. But yeah, gets ko. Kahit na hindi pa to the point na gusto mo siya, I still understood. Kahit sobrang sakit para sa'kin, inintindi kita.",
    "I never loved someone like this before. That's why I'm being like this. I really love you, and I'm willing to risk everything for you. Kaso ayun nga... I think I'm too late naaaaaa.",
    "Baby, know that I will always love you, and lagi kitang iintindihin. Bakit? Kasi mahal kita eh.",
    "I wish I could turn back time. Back when everyday nakakatawag tayo kahit wala namang gaanong pinag-uusapan. Yung super makulit na babiiiiiiii, my super maganda and madaldal na lovelove.",
    "Thank you for making me feel loved in ways I never expected. Thank you for making me feel accepted. Hindi mo ako jinudge sa kung ano ako o sa itsura ko, and somehow you made me feel like I was enough. Hanggang ngayon, dala-dala ko pa rin 'yon.",
    "And I still remember how you always said you loved hearing my voice. I don't even know if you were just teasing me or if you really meant it, but every time you said it, it made me smile. It made me feel special.",
    "No matter what happens after this, I'll always be thankful that I met you. You'll always be one of the most beautiful parts of my life.",
    "I love you so much, babi.",
    "Always."
  ];

  /* ==========================================
     2. Render Continuous Letter
     ========================================== */
  const letterContainer = document.getElementById('letter-content');

  if (letterContainer) {
    letterParagraphs.forEach((text) => {
      const p = document.createElement('p');
      p.className = 'letter-paragraph reveal-item';
      p.setAttribute('data-full-text', text);
      p.innerHTML = `<span class="typed-text"></span><span class="typewriter-cursor"></span>`;
      letterContainer.appendChild(p);
    });
  }

  /* ==========================================
     3. Image Error & Fallback Handler
     ========================================== */
  const images = document.querySelectorAll('.photo-frame img');
  images.forEach(img => {
    img.addEventListener('error', function () {
      const frame = this.closest('.photo-frame');
      if (frame) {
        frame.classList.add('is-fallback');
        frame.innerHTML = `<span>${this.alt || 'Photo'}</span>`;
      }
    });
  });

  /* ==========================================
     4. Typewriter Logic (Single Paragraph)
     ========================================== */
  function typeParagraph(pElement, callback) {
    const fullText = pElement.getAttribute('data-full-text');
    const typedSpan = pElement.querySelector('.typed-text');
    const cursor = pElement.querySelector('.typewriter-cursor');

    if (!typedSpan || !fullText) {
      if (callback) callback();
      return;
    }

    if (prefersReducedMotion) {
      typedSpan.textContent = fullText;
      if (cursor) cursor.remove();
      if (callback) callback();
      return;
    }

    let charIndex = 0;
    const speed = 18; // 18ms per char for continuous typing flow

    function typeChar() {
      if (charIndex < fullText.length) {
        typedSpan.textContent += fullText.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, speed);
      } else {
        if (cursor) cursor.remove();
        if (callback) callback();
      }
    }

    typeChar();
  }

  /* ==========================================
     5. Continuous One-Go Typewriter Sequence
     ========================================== */
  const letterSection = document.getElementById('letter-section');
  const letterParagraphEls = document.querySelectorAll('.letter-paragraph');
  let hasStartedLetterTypewriter = false;

  function startContinuousTypewriter(index = 0) {
    if (index >= letterParagraphEls.length) return;

    const pEl = letterParagraphEls[index];
    pEl.classList.add('is-visible');

    typeParagraph(pEl, () => {
      setTimeout(() => {
        startContinuousTypewriter(index + 1);
      }, 150);
    });
  }

  if (letterSection) {
    const letterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasStartedLetterTypewriter) {
          hasStartedLetterTypewriter = true;
          startContinuousTypewriter(0);
        }
      });
    }, {
      threshold: 0.1
    });

    letterObserver.observe(letterSection);
  }

  /* ==========================================
     6. General Reveal Observer (Hero, Photos, Beats)
     ========================================== */
  const revealElements = document.querySelectorAll('.reveal-item:not(.letter-paragraph)');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ==========================================
     7. Hero Scroll-linked Fade Out
     ========================================== */
  const heroSection = document.getElementById('hero');

  if (heroSection && !prefersReducedMotion) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const heroHeight = heroSection.offsetHeight;

          if (scrollY <= heroHeight) {
            const opacity = Math.max(0, 1 - (scrollY / (heroHeight * 0.75)));
            const scale = 1 - (scrollY / (heroHeight * 4));
            heroSection.style.opacity = opacity.toFixed(3);
            heroSection.style.transform = `scale(${scale.toFixed(3)})`;
          }

          ticking = false;
        });

        ticking = true;
      }
    });
  }

  /* ==========================================
     8. Final Section Word-by-Word Sequence
     ========================================== */
  const revealExperience = document.getElementById('reveal-experience');
  const words = document.querySelectorAll('.reveal-word');
  const finalClosing = document.getElementById('final-closing');

  if (revealExperience) {
    let hasTriggeredFinal = false;

    const finalObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasTriggeredFinal) {
          hasTriggeredFinal = true;

          if (prefersReducedMotion) {
            words.forEach(w => w.classList.add('is-visible'));
            if (finalClosing) finalClosing.classList.add('is-visible');
            return;
          }

          words.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add('is-visible');
            }, index * 600);
          });

          setTimeout(() => {
            if (finalClosing) finalClosing.classList.add('is-visible');
          }, words.length * 600 + 400);
        }
      });
    }, {
      threshold: 0.4
    });

    finalObserver.observe(revealExperience);
  }
});
