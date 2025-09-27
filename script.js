document.getElementById('whatsappBtn').onclick = function () {
  let form = document.getElementById('evaluationForm');
  let teacher = form.teacherName.value;
  let visit = form.visitNumber.value;
  let strengths = form.strengths.value;
  let needs = form.needs.value;
  let creativeAchieve = form.creativeAchieve.value;
  let summary =
    تقييم معلم: ${teacher}\n +
    الزيارة: ${visit}\n +
    جوانب التميز: ${strengths}\n +
    إنجازات إبداعية: ${creativeAchieve}\n +
    احتياجات التنمية: ${needs};
  let whatsappURL = https://wa.me/?text=${encodeURIComponent(summary)};
  window.open(whatsappURL, '_blank');
};

document.getElementById('evaluationForm').onsubmit = function(e){
  e.preventDefault();
  window.print();
};

// تحفيز المستخدم على إضافة إنجازات إبداعية
document.querySelector('textarea[name="creativeAchieve"]').addEventListener('input', function() {
  if (this.value.length > 10) {
    this.style.backgroundColor = "#e0ffeb";
    this.title = "إنجاز إبداعي رائع! يظهر كمؤشر إيجابي في التقييم.";
  } else {
    this.style.backgroundColor = "#fff";
    this.title = "";
  }
});