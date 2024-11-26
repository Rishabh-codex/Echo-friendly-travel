// Simple Carbon Footprint Calculator
function calculateCarbonFootprint() {
    const distance = parseFloat(document.getElementById('distance').value);
    const transport = document.getElementById('transport').value;
    let footprint = 0;
  
    switch (transport) {
      case 'car':
        footprint = distance * 0.271; // CO2 emissions per km (average car)
        break;
      case 'bike':
        footprint = distance * 0.021; // CO2 emissions per km (electric bike)
        break;
      case 'public':
        footprint = distance * 0.105; // CO2 emissions per km (public transport)
        break;
      default:
        alert("Select a valid transport option");
        return;
    }
  
    document.getElementById('result').textContent = 
      `Your estimated carbon footprint is ${footprint.toFixed(2)} kg CO2.`;
  }
  
  // Simple Feedback Form
  document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('thank-you-message').style.display = 'block';
  });
  