export class AddressEntry {
  public firstName: string;
  public lastName: string;
  public phone?: string;
  public email?: string;
  public address?: string;
  public city?: string;
  public country?: string;
  public postcode?: string;
  public notes?: string;


  constructor(firstName?: string, lastName?: string, phone?: string, email?: string, address?: string, city?: string, country?: string, postcode?: string, notes?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.city = city;
    this.country = country;
    this.postcode = postcode;
    this.notes = notes;
  }
}
