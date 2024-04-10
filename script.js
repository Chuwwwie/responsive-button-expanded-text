const circle = document.getElementById('circle');

  const overlay = document.getElementById('overlay');

  const expandedText = document.getElementById('expandedText');

  let isExpanded = false;

  

  document.addEventListener('click', (e) => {

    if (e.target === circle || e.target === overlay) {

      isExpanded = !isExpanded;

      overlay.style.display = isExpanded ? 'block' : 'none';

      circle.style.transform = isExpanded ? 'translate(-50%, -50%) scale(5)' : 'translate(-50%, -50%) scale(1)';

      circle.textContent = isExpanded ? '' : 'Click';

      if (isExpanded) {

        setTimeout(() => {

          expandedText.style.display = 'block';

          expandedText.style.opacity = 1;

        }, 300); // adjust timing to match transform transition

      } else {

        expandedText.style.opacity = 0;

        setTimeout(() => {

          expandedText.style.display = 'none';

        }, 300); // hide text after fading out

      }

    }

  }, false)
