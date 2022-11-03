export interface ICadastro {
    name: string;
    email: string;
    grupoSenhas: {
        senha:string,
        confirmSenha:string,
    };
}