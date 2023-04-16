(() => {
    const productsContainer = document.getElementById('productsContainer')
    const productFilter = document.getElementById('productFilter')
    
    const appState = {
        products: [{
            image: 'https://dummyimage.com/128x64/aa0/000',
            name: 'Product 1a',
            description: 'Product description',
            price: 16384
        }, {
            image: 'https://dummyimage.com/128x64/a0a/000',
            name: 'Product 1b',
            description: 'Product description',
            price: 32768
        }, {
            image: 'https://dummyimage.com/128x64/a00/000',
            name: 'Product 2',
            description: 'Product description',
            price: 32768
        }, {
            image: 'https://dummyimage.com/128x64/0aa/000',
            name: 'Product 3',
            description: 'Product description',
            price: 65536
        }, {
            image: 'https://dummyimage.com/128x64/0a0/000',
            name: 'Product 4',
            description: 'Product description',
            price: 65536
        }],
        page: 0
    }

    const toProductCard = ({ name, description, price, image }) => {
        const li = document.createElement('li')
        const figure = document.createElement('figure')
        const img = Object.assign(document.createElement('img'), {
            src: image
        })
        const figcaption = Object.assign(document.createElement('figcaption'), {
            textContent: name
        })
        const span = Object.assign(document.createElement('span'), {
            textContent: description,
            className: 'productDescription'
        })
        const b = Object.assign(document.createElement('b'), {
            textContent: `$${price}`,
            className: 'price'
        })
        figure.appendChild(img)
        figure.appendChild(figcaption)
        li.appendChild(figure)
        li.appendChild(span)
        li.appendChild(b)
        return li
    }

    const filterProducts = (products, filterValue) =>
        products.filter(product => product.name.includes(filterValue))

    const renderProducts = (products) => {
        productsContainer.innerHTML = ''
        products.map(toProductCard)
            .forEach(productCard => {
                productsContainer.appendChild(productCard)
            });
    }

    productFilter.addEventListener('input', ({ target: { value }}) => {
        renderProducts(filterProducts(appState.products, value))
    })

    renderProducts(appState.products)

})()