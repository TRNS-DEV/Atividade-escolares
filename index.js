function pedidos(){
    let compra=Number(document.getElementById("pedido").value);
    let mensagem="";
    switch (compra) {
        case 1:
            mensagem="Você comprou Pipoca";
            break;
            case 2:
                mensagem="Você comprou Cachorro quente";
                break;
                case 3:
                    mensagem="Você comprou Coca-Cola";
                    break;
                    case 4:
                        mensagem="Você comprou Suco";
                        break;
        default:
             mensagem="Codigo invalido selecione um item de 1 a 4";

    }
    document.getElementById("resultado").innerHTML=mensagem;
}