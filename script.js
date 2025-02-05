document.addEventListener('DOMContentLoaded', () => {
  // Add dynamic header shadow on scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mapping of key points for each module (video)
  const keypointsData = {
    "Week 1": [
      "Understand ethical foundations",
      "Identify primary data sources",
      "Recognize bias indicators",
      "Analyze case studies",
      "Review regulatory standards"
    ],
    "Week 2": [
      "Examine privacy policies",
      "Evaluate consent mechanisms",
      "Scrutinize data retention",
      "Assess transparency",
      "Compare terms of use"
    ],
    "Week 3": [
      "Explore collection techniques",
      "Identify sampling biases",
      "Assess quality of data",
      "Review collection ethics",
      "Understand data diversity"
    ],
    "Week 4": [
      "Analyze algorithmic fairness",
      "Identify bias in models",
      "Evaluate decision impact",
      "Consider accountability",
      "Review mitigation strategies"
    ],
    "Week 5": [
      "Study real-world case studies",
      "Evaluate outcome metrics",
      "Identify success factors",
      "Note potential pitfalls",
      "Discuss industry standards"
    ],
    "Week 6": [
      "Examine cultural impact",
      "Assess societal implications",
      "Identify ethical dilemmas",
      "Evaluate diversity issues",
      "Understand global perspectives"
    ],
    "Week 7": [
      "Review data bias examples",
      "Evaluate systemic factors",
      "Identify corrective measures",
      "Analyze consequences",
      "Discuss future trends"
    ],
    "Week 8": [
      "Focus on mitigation techniques",
      "Examine model adjustments",
      "Review best practices",
      "Assess scalability",
      "Evaluate real-world applications"
    ],
    "Week 9": [
      "Study design principles",
      "Assess user impact",
      "Review ethical frameworks",
      "Evaluate system improvements",
      "Identify innovation opportunities"
    ],
    "Week 10": [
      "Recap course insights",
      "Assess final project",
      "Identify actionable steps",
      "Evaluate learning outcomes",
      "Discuss future innovations"
    ]
  };

  // Modal functionality for video playback with dynamic key points
  const modal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  const modalClose = document.querySelector('.modal-close');
  const modalButtons = document.querySelectorAll('.open-modal');
  const modalTitle = document.getElementById('modalTitle');
  const keyPointsList = document.getElementById('keyPointsList');

  modalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const moduleCard = e.target.closest('.module-card');
      const week = moduleCard.getAttribute('data-week');
      const videoUrl = moduleCard.getAttribute('data-video');
      videoFrame.src = videoUrl + '?autoplay=1';
      modalTitle.textContent = week + " - Video Details";

      // Clear and set key points dynamically
      keyPointsList.innerHTML = '';
      const points = keypointsData[week] || ["No key points available"];
      points.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        keyPointsList.appendChild(li);
      });

      modal.style.display = 'flex';
    });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    videoFrame.src = '';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      videoFrame.src = '';
    }
  });
});
