export interface createVandorInput{
    name: string,
    ownerName: string,
    foodType: [string] ,
    pinCode: string,
    address: string,
    phone: string,
    email: string,
    password: string
}

export interface vandorLoginInput{
    email: string ,
    password: string
}

export interface vandorPayload {
    _id: string,
    email: string,
    name: string,
    foodTypes: [string]
}