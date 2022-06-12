const usuario = new Usuario(200);

class Usuario {
    constructor(saldo) {
        this.saldo = 20000;
    }
}

class Aviao {
    constructor() {
        this.tipo;
        this.
    }
}
class AreaUsuario {
    constructor() {
        this.divTransporte = document.getElementById("transporte");
        this.valorT1 = document.getElementById("valor_t1");
        this.valorT2 = document.getElementById("valor_t2");
        this.divTipoViagem = document.getElementById("tipo_viagem");
        this.valorV1 = document.getElementById("valor_v1");
        this.valorV2 = document.getElementById("valor_v2");
        this.divIdaVolta = document.getElementById("ida_volta");
        this.divIda = document.getElementById("ida");
        this.bntEnvio = document.getElementById("envio");

        this.bntEnvio.addEventListener("click", () => this.Enviar(usuario));
    }

    Enviar(usuario) {
        if(Usuario.saldo < custo_viagem) {
            this.bntEnvio.ariaDisabled = true;
            console.log("Saldo insuficiente para realizar a operação.");
        }
        console.log("voucher emitido.");
    }
}