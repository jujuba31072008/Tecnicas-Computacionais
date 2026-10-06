const nomes = ["Ana Julia", "Sofia", "Caio", "Ana Beatriz", "Milena", "Igor", "Melina"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);