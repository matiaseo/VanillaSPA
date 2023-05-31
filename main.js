;(async () => {
    const productsUrl = 'https://unqctexfi6z2hc4is5sitgbvxy0gmbjz.lambda-url.us-east-2.on.aws/'
    const productsContainer = document.querySelector('.productsContainer')
    const productFilter = document.getElementById('productFilter')
    
    let products = []

    const toProductCard = ({ name, description, price, image }) => {
        const li = document.createElement('li')
        const figure = document.createElement('figure')
        const img = Object.assign(document.createElement('img'), {
            src: image,
            className: 'productImage'
        })
        const duppedImage = Object.assign(document.createElement('img'), {
            src: image,
            className: 'duppedImage'
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
        figure.appendChild(duppedImage)
        figure.appendChild(img)
        figure.appendChild(figcaption)
        li.appendChild(figure)
        li.appendChild(span)
        li.appendChild(b)
        return li
    }

    const filterProducts = (products, filterValue) =>
        products.filter(product => product.name.includes(filterValue))

    const renderProducts = products => {
        productsContainer.innerHTML = ''
        products.map(toProductCard)
            .forEach(productCard => {
                productsContainer.appendChild(productCard)
            });
    }

    productFilter.addEventListener('input', ({ target: { value }}) => {
        renderProducts(filterProducts(products, value))
    })

    const fetchProducts = async () => {
        const response = await fetch(productsUrl)
        return response.json()
    }

    renderProducts(products = await fetchProducts())
    
})()