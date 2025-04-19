#dicionario para reconhecimento dos termos da escola
notas = {
    'R':4,
    'B':6,
    'MB':8,
    'O':10
}
#função de soma da média
def calcular_media(valores):
    return sum(notas[letra.upper()] for letra in valores) / len(valores)

#função de conversão numero p/ letra
def nota_para_letra(media):
    if media <=4:
        return 'R'
    elif media <=6:
       return 'B'
    elif media <=8:
       return 'MB'
    elif media <=10:
       return 'O'

#lista para os dados serem armazenados
boletim = []

qtd = int(input("Quantos alunos existem na sua turma? "))
for _ in range(qtd):
   #coleta de dados e notas
    nomeAluno = str(input("Qual o nome do(a) aluno(a)? "))
    print("Digite os valores separados apenas por espaço e usando R, B, MB e O.")
    mediaFala = input("Digite todos os valores referentes à fala: ").split()
    mediaAudi = input("Digite todos os valores referentes à audição: ").split()
    mediaLeit = input("Digite todos os valores referentes à leitura:  ").split()
    mediaEscr = input("Digite todos os valores referentes à escrita: ").split()

#conversao de numeros para letras e calculo da media
    mediaFala = nota_para_letra(calcular_media(mediaFala))
    mediaAudi = nota_para_letra(calcular_media(mediaAudi))
    mediaLeit = nota_para_letra(calcular_media(mediaLeit))
    mediaEscr = nota_para_letra(calcular_media(mediaEscr))


#preenchendo boletins
    boletim.append({
        'nome': nomeAluno,
        'fala': mediaFala,
        'audição': mediaAudi,
        'leitura': mediaLeit,
        'escrita': mediaEscr
})
#boletim final
print("\nBoletim Final:")
print("="*40)
for aluno in boletim:
    print(f"Nome: {aluno['nome']}")
    print(f"  Fala: {aluno['fala']}")
    print(f"  Audição: {aluno['audição']}")
    print(f"  Leitura: {aluno['leitura']}")
    print(f"  Escrita: {aluno['escrita']}")
    print("=" * 40)


#espere a ação do usuário
input("Pressione Enter para fechar o programa... ")