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


export interface updateProfileInter{
    name: string,
    address: string,
    phone: string,
    foodType: [string]
}