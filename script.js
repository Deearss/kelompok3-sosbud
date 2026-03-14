// Tab switching
function switchTab(id, el) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  el.classList.add('active');
  animateProgress();
}

// Outline toggle
function toggleOutline(el) {
  el.classList.toggle('open');
  const children = el.nextElementSibling;
  children.classList.toggle('open');
}

// Checklist
function toggleCheck(box) {
  box.classList.toggle('checked');
  const li = box.closest('li');
  li.classList.toggle('done');
  updateCheckProgress();
}

function updateCheckProgress() {
  const total = document.querySelectorAll('#checklist li').length;
  const done  = document.querySelectorAll('#checklist .check-box.checked').length;
  const el    = document.getElementById('check-progress');
  el.textContent = done + ' / ' + total + ' selesai';
  if (done === total) {
    el.style.color = 'var(--accent2)';
    el.textContent = '✓ Semua checklist selesai — siap dikumpulkan!';
  } else {
    el.style.color = 'var(--muted)';
  }
}

// Progress bar animation on tab switch
function animateProgress() {
  const bar = document.getElementById('progress-bar');
  bar.style.width = '0%';
  bar.style.opacity = '1';
  setTimeout(() => bar.style.width = '70%', 50);
  setTimeout(() => bar.style.width = '100%', 250);
  setTimeout(() => { bar.style.opacity = '0'; bar.style.width = '0%'; }, 550);
}
