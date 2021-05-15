var usersData = []; // declarando a variavel que ira guardar os usuários cadastrados durante o tempo de execução

const auth = (user, password) =>{
    if(!user||user == undefined || !password || password == undefined) return false; // validando os valores
    var searchUser = usersData.filter((x) =>{if(x.username == user)return true})[0]; // procurando pelo usuário no objeto principal de usuários
    //console.log(searchUser)
    if(!searchUser|| searchUser == []) return false; // caso o retorno da pesquisa pelo nome do usuário for falso, ele retorna falso. 
    //console.log(searchUser.password)
    if(searchUser.password == password)  return true; // validando senha depois de ter validado o email
    return false; // caso não tiver retornado o valor verdadeiro nas condições anteriores, só resta retornar false (não autenticado) 
};

const createUser = (user, password ) =>{
    if(!user||user == undefined || !password || password == undefined) return {status:0, msg: 'valores fornecidos são invalidos para executar este processo'}; // validando os valores
    //console.log(usersData.filter((x)=>{return x.username == user})[0])
    if(!usersData.filter((x)=>{return x.username == user}) == undefined) return {status:0, msg: 'usuário já existente'}; // validando se o usuário já existe na base
    usersData.push({username: user, password: password }); // incluindo o novo usuário base de usuários
    return  {status:1, msg: 'usuário criado com sucesso'}; // retornando que o usuário foi criado com sucesso
};

module.exports = {
    create(req,res){
        var user = req.query.user || null;
        var pass = req.query.password || null;
        var response = createUser(user,pass);
        return res.send(response.msg);
    },
    login(req,res){
        var user = req.query.user || null;
        var pass = req.query.password || null;
        if(!auth(user,pass)) return res.status(400).send({error:'not autenticated'});
        return res.status(200).send({status:'autenticated'});
    }
};