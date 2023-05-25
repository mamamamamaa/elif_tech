export interface IOrderFormInputs {
  label: string;
  name: "name" | "email" | "phone" | "address";
  defaultValue: string;
  placeholder: string;
}

export interface IOrderHistoryFormInputs {
  label: string;
  name: "email" | "phone";
  defaultValue: string;
  placeholder: string;
}
