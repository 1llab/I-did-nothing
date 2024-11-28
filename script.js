document.addEventListener("DOMContentLoaded", () => {
    // 그래프 생성
    const ctx = document.getElementById('yieldChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1년', '2년', '3년', '4년', '5년', '6년', '7년', '8년', '9년', '10년'],
            datasets: [{
                label: '수확량 (톤/헥타르)',
                data: [1.5, 2.0, 2.7, 3.5, 4.2, 5.0, 5.7, 6.3, 7.0, 7.8],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 2000 // 그래프 애니메이션 지속시간
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // 파티클 배경 초기화
    const particleConfig = {
        particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: "#ffffff" }
        }
    };
    particlesJS("particle-background", particleConfig);

    // 알록달록 색상 배열
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#00ffff", "#ffff00"];
    let currentColorIndex = 0;

    // 버튼 클릭 시 색깔 바뀌는 입자 생성
    const button = document.getElementById('action-button');
    button.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length; // 색상 순환
        particleConfig.particles.color.value = colors[currentColorIndex];
        particleConfig.particles.number.value = 100; // 입자 수 증가
        particlesJS("particle-background", particleConfig);
        setTimeout(() => {
            particleConfig.particles.number.value = 50; // 원래 상태로 복구
            particleConfig.particles.color.value = "#ffffff"; // 색상 복구
            particlesJS("particle-background", particleConfig);
        }, 2000); // 2초 후 복구
    });

    // 스크롤 애니메이션
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
});
