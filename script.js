let currentDomain = '';

const providers = {
  health: ["Dr. Ahmed Khan - Cardiologist", "Dr. Sara Malik - Pediatrician"],
  education: ["Prof. Ali Hassan - Mathematics", "Ms. Fatima Noor - English"],
  beauty: ["Glam Studio - Hair & Makeup", "Luxe Beauty Parlor"]
};

function selectDomain(domain) {
  currentDomain = domain;
  document.getElementById('booking-section').classList.remove('hidden');
  document.getElementById('domain-title').textContent = 
    domain === 'health' ? '🏥 Healthcare Appointment' :
    domain === 'education' ? '📚 Education Appointment' : '💇 Beauty Appointment';

  const providerSelect = document.getElementById('provider');
  providerSelect.innerHTML = '';
  
  providers[domain].forEach(provider => {
    const option = document.createElement('option');
    option.textContent = provider;
    providerSelect.appendChild(option);
  });
}

function bookAppointment() {
  const provider = document.getElementById('provider').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (!date) {
    alert("Please select a date!");
    return;
  }

  alert(`✅ Appointment Booked Successfully!\n\nDomain: ${currentDomain.toUpperCase()}\nProvider: ${provider}\nDate: ${date}\nTime: ${time}\n\nConfirmation sent to your email.`);
  
  // Reset form
  document.getElementById('date').value = '';
}