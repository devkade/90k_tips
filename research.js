const researchData = {
    '병사': 'data/unit.js',
    '정책': 'data/policy.js',
    '장비': 'data/equipment.js'
};

const loadedData = {};

async function loadResearchData(type) {
    if (!loadedData[type]) {
        const script = document.createElement('script');
        script.src = researchData[type];
        script.onload = () => {
            const dataVar = window[type.toUpperCase() + '_DATA'];
            if (dataVar) {
                loadedData[type] = dataVar;
                console.log(`${type} 데이터 로드 성공`, dataVar);
                updateAvailableItems();
            } else {
                console.error(`${type.toUpperCase()}_DATA 로드 실패: ${script.src} 확인 필요`);
            }
        };
        script.onerror = () => console.error(`파일을 찾을 수 없습니다: ${script.src}`);
        document.body.appendChild(script);
    }
}

document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', function () {
        const researchType = this.querySelector('.research-type').textContent;
        loadResearchData(researchType);
    });
});

function updateAvailableItems() {
    const availableItems = document.querySelector('.available-items');
    availableItems.innerHTML = '';

    Object.keys(loadedData).forEach(type => {
        const data = loadedData[type];
        if (!data) return;

        Object.keys(data).forEach(itemName => {
            const item = document.createElement('div');
            item.className = 'available-item';
            item.textContent = itemName;
            availableItems.appendChild(item);
        });
    });
}
