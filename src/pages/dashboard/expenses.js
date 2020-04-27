

export function createData(date, name, description, paymentMethod, amount) {
    return { date, name, description, paymentMethod, amount };
}

export const expenses = [
    createData(new Date(), 'Elvis Presley', 'Taxi toto', 'Cash', 312.44),
    createData(new Date(2019, 1, 1), 'Paul McCartney', 'Train toto', 'Cash', 866.99),
    createData(new Date(2019, 7, 10), 'Tom Scholz', 'Avion titi', 'Carte', 100.81),
    createData(new Date(), 'Michael Jackson', 'Frais visas', 'Cheque', 654.39),
    createData(new Date(), 'Bruce Springsteen', 'Repas client', 'Cheque', 212.79),
]