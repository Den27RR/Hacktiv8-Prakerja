function hitungLuasDanKeliling() {
    const radius = parseFloat(document.getElementById("radius").value);
    const luas = Math.PI * radius * radius;
    const keliling = 2 * Math.PI * radius;
  
    document.getElementById("luas").textContent = luas.toFixed(2);
    document.getElementById("keliling").textContent = keliling.toFixed(2);
  }