// construindo objeto
/*const user = {
        name : "carlos",
        phone : 12345,
        accept : true
      }
      alert(user.name)
      resultado ..... carlos
      */

//construindo uma função
/*function showmeSomeThing(){
       alert(links.github) //aqui o alert exibe o objeto links.propriedade
      }
      // aqui foi construido objeto links
        const links = {
        github : "carlospunkk",// propriedade
        facebook : "carlosromulor"//propriedade

      }
      showmeSomeThing() //chama a função

      //DOM
      CRIA DOCUMENTOS PARA O NAVEGADOR E COM O JAVASCRIPT EU CONSIGO ACESSA LOS E MODIFICA LOS
      */
const linksSocialMedia = {
  github: 'carlospunkk', // propriedade
  youtube: 'UCz5aEac48VAFEmxyXOtzQ3Q',
  instagram: 'cromulo_romulo',
  facebook: 'carlosromulor',
  twitter: 'RomuloVile'
}
function ChangeMediaLink() {
  //document.getElementById('name_user').textContent = "eduardo"
  //name_user.textContent ="carlos"
  for (let li of socialLinks.children) {
    // criei o for <li> peguei os filhos de <ul> que são <li class> e conta todas as tags filhos
    const social = li.getAttribute('class') //criei a variavel social que vai receber os atributos do filho <li class>
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` // peguei os filhos da <li> da posição [0] do href
    //alert(li.children[0].href)
  }
}
ChangeMediaLink()
// criei a função para pegar dados do json github e guardar na variavel url
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      name_user.textContent = data.name
      imagem.src = data.avatar_url
      texto.textContent = data.bio
    })
}

getGitHubProfileInfos()
