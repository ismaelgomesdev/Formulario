const masks = {
    cpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
    },
    telefone(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{0})(\d)/, '$1($2')
            .replace(/(\d{2})(\d)/, '$1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
    },
    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
    },
    idade(value) {
        return value.replace(/\D/g, '')
    },
    peso(value) {
        return value.replace(/\D/g, '')
    },
    numero(value) {
        return value.replace(/\D/g, '')
    }
}

document.querySelectorAll('input.regex').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})