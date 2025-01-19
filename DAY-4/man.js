async function fetchData() {
    try {
        let response = await fetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/users');
        if (!response.ok) {
            throw new Error('Жүктеу қателігі!');
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Қате:', error);
        document.getElementById('results').innerHTML = '<p>Деректерді жүктеу кезінде қате кетті!</p>';
    }
}

function displayData(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

   
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqfUnQtQFzm0q81CSipckdHsklCzb5rxeQw&s.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsj6BJVvksXCT2w0liS2kmoX5uqbcsFUSn_Q&s.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRb1_3aVc2AK5As2ZIiFaMl-pcL-k5UdiVZQ&s.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_672kZqmmnw2fNXwpkFU42H0tjpqzJ587eg&s.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj21crKCEKOdEdGky9fBahHNnJlNcgregIGQ&s.jpg'
    ];

    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${images[index % images.length]}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.jobTitle}</p>
        `;
        resultsContainer.appendChild(card);
    });
}

async function searchData() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const data = await fetchData();

    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchInput));
    if (filteredData.length > 0) {
        displayData(filteredData);
    } else {
        document.getElementById('results').innerHTML = '<p>Ақпарат өкінішке орай табылмады!</p>';
    }
}


fetchData().then(data => displayData(data));
