const providers = {
  health: ["Dr. Ayesha Khan - General Physician", "Dr. Usman Malik - Cardiologist", "Dr. Fatima Shah - Pediatrician"],
  education: ["Prof. Ahmed Hassan - Mathematics", "Ms. Sara Noor - English Literature", "Sir Ali Rehman - Physics"],
  beauty: ["Luxe Beauty Lounge", "Glamour Studio", "Elysium Spa & Salon"]
};

function selectDomain(domain) {
  document.getElementById('booking-section').classList.remove('hidden');
  
  const title = document.getElementById('domain-title');
  title.textContent = domain === 'health' ? '🏥 Healthcare Appointment' :
                      domain === 'education' ? '📖 Education Appointment' : '💆‍♀️ Beauty Appointment';

  const select = document.getElementById('provider');
  select.innerHTML = '<option value="">Select Provider</option>';
  
  providers[domain].forEach(provider => {
    const option = document.createElement('option');
    option.value = provider;
    option.textContent = provider;
    select.appendChild(option);
  });
}

function bookAppointment() {
  const provider = document.getElementById('provider').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (!provider || !date || !time) {
    alert("Please fill all fields");
    return;
  }

  alert(`🎉 Appointment Confirmed!\n\nService: ${provider}\nDate: ${date}\nTime: ${time}\n\nYou will receive a confirmation shortly.`);
}