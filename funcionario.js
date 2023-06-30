function Funcionario (nome, cargo, salario) {
   
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
    return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.setSalario = function(valor) {
        _salario = valor;
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

}

function Programador(nome) {
    Funcionario.call(this, nome, "Programador", 3000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.05;
        this.setSalario(novoSalario);
        
        
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 8000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.1;
        this.setSalario(novoSalario);
        
        
    }
}

const funcionario1 = new Funcionario("Isabela", "dev back-end", 5000);
const funcionario2 = new Programador("Roberto");
const funcionario3 = new Gerente ("Maria");

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3.getSalario())



