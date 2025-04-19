p, a, i = input('Digite seu peso(kg), altura(cm) e idade(anos)').split()
sexo = input('Você é do sexo masculino ou feminino?')

while sexo != 'masculino' and sexo != 'feminino':
    sexo = input('Sexo inválido, por favor, digite novamente')

if sexo == 'masculino':
    basal = float(88.362 + (13.397 * float(p)) + (4.799 * float(a)) - (5.677 * float(i)))
elif sexo == 'feminino':
    basal = float(447.593 + (9.247 * float(p)) + (3.098 * float(a)) - (4.330 * float(i)))

print('Seu gasto metabólico basal é de {:.2f} calorias'.format(basal))

 #calculo dos macros
macros = input('Qual o seu objetivo? cutting ou bulking?')

while macros != 'cutting' and macros != 'bulking':
    macros = input('Insira o objetivo corretamente')

if macros == 'cutting':
    creatina = float(0.07*float(p))
    agua = 35*float(p)
    proteina = float(1.6)*float(p)
    carbo = 2*float(p)
elif macros == 'bulking':
    creatina = float(0.07*float(p))
    agua = 35*float(p)
    proteina = float(2.2)*float(p)
    carbo = 4*float(p)

print('Seus macros serão: Carbo {:.0f}g, Proteína {:.0f}g diários, além de tomar {:.0f}Ml de água e {:.1f}g de creatina'.format(carbo, proteina, agua, creatina))