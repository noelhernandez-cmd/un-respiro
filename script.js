'use strict';
const sections=[
{id:'curiosidades',icon:'✦',name:'Sorpréndeme',description:'Cultura general y curiosidades',label:'Cultura general',entries:[
['Una estrella del pasado','La luz del Sol tarda aproximadamente 8 minutos y 20 segundos en llegar a la Tierra. Cuando lo vemos, estamos mirando un poquito hacia el pasado.','Un dato para mirar el cielo de otra forma.'],
['Tres corazones','Los pulpos tienen tres corazones y sangre azul. Dos corazones envían sangre a las branquias y el tercero al resto del cuerpo.','La naturaleza siempre guarda sorpresas.'],
['Una lluvia de diamantes','En las profundidades de Neptuno y Urano, los científicos consideran posible que la presión forme cristales de diamante a partir de compuestos de carbono.','Es una hipótesis respaldada por experimentos, no una observación directa.'],
['La memoria de los aromas','Los olores pueden evocar recuerdos con mucha fuerza, porque el olfato está estrechamente conectado con regiones cerebrales relacionadas con las emociones y la memoria.','¿Qué aroma te recuerda a casa?'],
['El bosque se comunica','Algunos hongos forman redes bajo tierra que conectan las raíces de distintas plantas y permiten intercambiar nutrientes y señales químicas.','La naturaleza está llena de conexiones invisibles.']]},
{id:'amor',icon:'♡',name:'Algo bonito',description:'Amor, amistad y emociones',label:'Palabras bonitas',entries:[
['Para ti, HeyHey','Si pudiera regalarte una certeza, sería esta: no tienes que ser perfecta para ser profundamente amada.','Con mucho amor de Noel HM.'],
['Mi lugar favorito','Entre tantas cosas bonitas del mundo, una de mis favoritas es coincidir contigo.','De Noel para HeyHey.'],
['De las cosas sencillas','Ojalá nunca nos falten las charlas largas, los abrazos sin motivo y las personas con quienes podemos ser nosotros mismos.',''],
['Si pudiera pedir algo','Pediría que siempre encuentres a alguien que celebre tus alegrías pequeñas como si fueran enormes.',''],
['Lo bonito de coincidir','Entre tantas historias posibles, qué suerte coincidir con personas que nos hacen sentir en paz.','']]},
{id:'inspiracion',icon:'☼',name:'Inspírame',description:'Frases que dejan huella',label:'Motivación',entries:[
['A tu propio ritmo','No todos los días tienen que ser extraordinarios. Algunos son valiosos simplemente porque seguiste adelante.',''],
['Crecer con paciencia','No necesitas transformarte de golpe. Aprende algo, cuídate un poco, equivócate sin castigarte y celebra cada pequeño avance.','Tu progreso es tuyo.'],
['Una cosa a la vez','No necesitas resolver toda tu vida esta tarde. Empieza por lo que tienes enfrente.',''],
['Volver a empezar','Cambiar de opinión, de rumbo o de sueño también es una forma de crecer.',''],
['Tu mejor compañía','Háblate como le hablarías a alguien que quieres mucho. Tú también mereces esa paciencia, especialmente en los días difíciles.','']]},
{id:'calma',icon:'☕',name:'Desconéctame',description:'Una pausa para respirar',label:'Un momento de calma',entries:[
['Afloja un poquito','Separa la lengua del paladar, relaja los hombros y deja que tu respiración encuentre su propio ritmo.','Puedes probar la pausa guiada más abajo.'],
['No pasa nada','Si hoy solo puedes hacer una cosa a la vez, que sea una cosa a la vez.',''],
['Mira a tu alrededor','Encuentra tres cosas que puedas ver, dos que puedas escuchar y una que puedas sentir. Vuelve por un instante al presente.',''],
['Permiso para descansar','No necesitas justificar cada minuto que dedicas a recuperar energía.',''],
['Un instante sin pantalla','Mira hacia un punto lejano durante unos segundos. Parpadea con calma y nota cómo te sientes.','']]},
{id:'historias',icon:'❦',name:'Historias breves',description:'Lecturas de dos minutos',label:'Microhistorias',entries:[
['El banco de la plaza','Todas las tardes, Elena se sentaba en el mismo banco con dos mandarinas. Una para ella y otra para quien quisiera conversar. Durante semanas volvió a casa con la segunda mandarina intacta. Un jueves, una mujer se sentó a su lado y dijo: «Hoy sí necesito una». No hablaron de nada importante. Y, sin embargo, ambas volvieron al día siguiente.','A veces, la compañía empieza con un gesto pequeño.'],
['El paraguas amarillo','A Gabriel se le olvidaba siempre el paraguas. Un día encontró uno amarillo junto a la puerta de la oficina con una nota: «Para la próxima lluvia». Nunca supo quién lo dejó. Desde entonces, cada vez que el cielo se nublaba, preguntaba si alguien necesitaba acompañarlo hasta la parada.','La amabilidad puede seguir viajando.'],
['El vaso azul','Cada mañana, la abuela ponía flores en un vaso azul, aunque fueran solo dos hojas del jardín. «Para que la mesa sepa que la queremos», decía. Años después, su nieta compró un vaso azul para su primer departamento. No tenía flores todavía, pero lo puso en medio de la mesa.','Los rituales también guardan abrazos.'],
['La librería de la esquina','La librera dejaba una silla junto al escaparate. No era para clientes, decía, sino para quien necesitara terminar un capítulo antes de volver al mundo. La silla nunca estuvo vacía demasiado tiempo.','Hay lugares que nos prestan un poco de paz.']]},
{id:'sonrisas',icon:'☺',name:'Hazme sonreír',description:'Humor ligero y ocurrencias',label:'Una sonrisa',entries:[
['Mi plan de hoy','Mi plan era tener todo bajo control, pero mi café y mi lista de pendientes decidieron improvisar.',''],
['La planta sabia','Le pregunté a mi planta cómo mantenerse tranquila. No respondió. Claramente tiene mejores límites que yo.',''],
['Adulto funcional','Hoy doblé la ropa el mismo día que la lavé. No quiero presumir, pero ya casi soy una leyenda.',''],
['Una gran decisión','Decidí organizar mis ideas. Hicieron una reunión sin mí y cambiaron el orden del día.',''],
['Ese pequeño triunfo','Si abriste el refrigerador y recordaste a qué ibas, hoy ya ganaste algo.','']]}
];

const heyheySections=[
{id:'valentia',icon:'☀',name:'Valiente como tú',description:'Una luz inspirada en Enredados',label:'Atrévete a descubrir',entries:[
['Tu propio horizonte','En Enredados, Rapunzel descubre que el mundo es mucho más grande que la torre que conocía. Tú también puedes explorar nuevas posibilidades, a tu manera y cuando estés lista.','Un paso pequeño también es valentía.'],
['Las luces del cielo','Las linternas flotantes de Enredados evocan una esperanza que se mantiene viva con los años. No tienes que saber exactamente adónde vas para seguir tus sueños.','Dato: las linternas son uno de los símbolos visuales más reconocibles de la película.'],
['Dar el salto','Ser valiente no significa dejar de sentir miedo; a veces es pedir ayuda, intentarlo o decidir descansar para volver con más claridad.','No estás sola en el camino.'],
['La fuerza del cabello','Tu cabello rojo me encanta, pero lo que más adoro es la persona tan especial que hay debajo de él.','Con amor, Noel HM ♡']]},
{id:'origen',icon:'♫',name:'Nuestro HeyHey',description:'Un apodo que tiene historia',label:'Una historia nuestra',entries:[
['¿Sabes de dónde salió HeyHey? 🐓','De Hei Hei, el gallito despistado y adorable de Moana. Lo que empezó como una referencia divertida terminó siendo uno de mis apodos favoritos para ti.','A veces un personaje entra a nuestra historia y se queda para siempre en forma de apodo. 🐓'],
['Distinta, y eso es hermoso','No necesitas encajar en un molde para ser extraordinaria. Hay algo precioso en tu forma única de mirar el mundo.','No estar en el montón puede ser tu fuerza.'],
['Tu propia travesía','Moana nos recuerda que descubrir quién eres puede llevar tiempo. Puedes explorar, equivocarte y elegir tu rumbo sin perder tu esencia.','Hei Hei es el gallito de Moana; nuestro apodo tiene vida propia. ♡']]},
{id:'luna',icon:'✧',name:'Brilla y fluye',description:'Un guiño a Soy Luna y a tu luz' ,label:'Movimiento y confianza',entries:[
['Mi Princesa, de Matteo','Te dediqué Princesa, la canción que Matteo canta en Soy Luna, porque al escucharla pensé en ti. En esta historia, mi princesa eres tú: con tu sonrisa preciosa, tu cabello rojo y todo lo que te hace tan especial.','Y sí: vi Soy Luna por ti, y ahora esta canción también es nuestra. ♡'],
['Tu propio ritmo','En Soy Luna, la música y el patinaje acompañan historias de amistad, identidad y cambios. Tu camino tampoco tiene que verse como el de nadie más.','Y sí: yo vi Soy Luna por ti ♡'],
['Tu brillo, a tu ritmo','No tienes que hacer nada especial hoy. Escucha esa canción que te gusta, recuerda cuánto brillas y descansa a tu ritmo.','Puedes volver a esta frase cada vez que lo necesites.'],
['Si hoy tropiezas','Cada nuevo intento tiene algo de práctica. No tienes que convertir tus tropiezos en derrotas definitivas.','Puedes levantarte, pedir compañía o simplemente tomar una pausa.']]},
{id:'sentir',icon:'❀',name:'Sentir y florecer',description:'Lecturas sensibles, con un guiño a Boulevard',label:'Emociones y esperanza',entries:[
['Tu libro favorito: Boulevard','Sé que Boulevard, de Flor M. Salvador, tiene un lugar especial en tu corazón. Me gustó escucharte hablar de Hasley, Luke y de ese mundo de páginas que tanto te emociona. Quiero seguir descubriendo las historias que amas, contigo.','Dato: Boulevard nació como una historia publicada en línea y después llegó a las librerías.'],
['Nuestra canción entre páginas','En nuestras primeras conversaciones me contaste que The Reason de Hoobastank aparece relacionada con Boulevard. Me encanta que una historia pueda convertirse también en una canción que te acompaña.','Gracias por dejarme entrar poquito a poquito en tu universo de libros y música.'],
['Las historias también nos mueven','Boulevard puede invitar a pensar en vínculos intensos y emociones complejas. Aquí quiero recordarte que el amor bonito también respeta, cuida y da tranquilidad.','Sentir profundamente no significa que debas sufrir para merecer amor.'],
['No todo dura para siempre','Hay días difíciles que cambian con el tiempo. Si hoy pesa algo, no necesitas encontrarle sentido inmediatamente. Puedes acompañarte de alguien y dar un paso a la vez.','No tienes que estar bien todo el tiempo.'],
['Caer no te define','Los tropiezos no borran lo que ya lograste. Si alguna vez tienes que empezar de nuevo, lo harás con todo lo aprendido y con derecho a descansar.','Crecer no exige lastimarse.'],
['Hay más posibilidades','Cuando un plan termina o cambia, a veces aparecen caminos que no habías visto. No hace falta apresurar el siguiente capítulo.','Poco a poco, HeyHey.']]},
{id:'principito',icon:'✧',name:'Nuestro pequeño planeta',description:'La rosa, el zorro y las estrellas de El Principito',label:'Inspirado en El Principito',entries:[
['Tu rosa, a tu manera','En El Principito, la rosa no es importante porque sea perfecta: lo es por el vínculo que se construye con ella. HeyHey, no tienes que ser impecable para que te quiera tanto.','Un recordatorio de Noel: tú ya eres especial para mí. ♡'],
['El zorro y los lazos','El encuentro con el zorro habla de cómo los vínculos se crean con tiempo, cuidado y presencia. Lo bonito entre nosotros también se construye poquito a poquito.','Dato literario: el zorro es uno de los encuentros más recordados de la historia.'],
['Una estrella para volver','Las estrellas del libro invitan a recordar a quienes queremos incluso cuando no están frente a nosotros. Cuando mires el cielo, ojalá sientas un abrazo mío.','Con mucho amor de Noel HM. ✧'],
['Lo esencial de ti','Puedes tener días confusos y seguir siendo tú. Tu sensibilidad, tus sueños, tu risa y hasta esas pequeñas rarezas que adoro no se miden con resultados.','Tu valor no depende de cómo haya salido el día.'],
['Pequeños pasos en un planeta enorme','El Principito recorre mundos distintos y aprende de cada encuentro. Tú tampoco tienes que comprender todo hoy: explorar, preguntar, descansar y volver a intentar también es vivir.','Un pequeño paso hoy puede ser suficiente.'],
['El regalo de tu cabello rojo','Hay rosas, atardeceres y planetas enteros en los cuentos. Pero en mi historia hay algo igual de bonito: esa chica de cabello rojo a la que amo tanto.','Para ti, HeyHey. ♡']]},
{id:'noel',icon:'♥',name:'Palabras de Noel',description:'Recordatorios escritos para ti',label:'De Noel para HeyHey',entries:[
['Para mí, eres la mejor','No porque tengas que demostrar nada, sino porque admiro todo lo que eres. Me encanta poder conocerte cada día un poquito más.','Te amo. — Noel HM'],
['Tu cabello rojo','Me fascina tu cabello rojo. Pero todavía más me gusta la manera en que sonríes, la forma en que sueñas y todo lo que te hace ser tú.','Con mucho amor ♡'],
['Vamos poco a poco','No hay que resolverlo todo hoy. Estoy feliz de compartir contigo los días luminosos y también esos en los que necesitamos bajar el ritmo.','Un paso a la vez, HeyHey.'],
['Te amo','Te amo en lo cotidiano: cuando nos reímos por cualquier cosa, cuando hablamos de tus series y cuando me cuentas lo que te ilusiona.','Siempre con cariño, Noel HM.'],
['Estoy orgulloso de ti','Hay esfuerzos que quizá nadie nota, pero yo quiero que sepas que los tuyos importan. Y si hoy te cuesta, sigues mereciendo amor y ternura.','No necesitas ganarte mi cariño.']]}
];
sections.push(...heyheySections);
const $=id=>document.getElementById(id);const all=sections.flatMap(s=>s.entries.map((e,i)=>({key:s.id+':'+i,section:s,...{title:e[0],text:e[1],extra:e[2]}})));
const storeKey='un-respiro-favorites-v1';let favorites=[];try{const stored=JSON.parse(localStorage.getItem(storeKey)||'[]');favorites=Array.isArray(stored)?stored.filter(k=>all.some(x=>x.key===k)):[]}catch(e){favorites=[]}
let active='all',current=null,toastTimeout,breathInterval=null,breathTimeout=null;
function saveFavorites(){try{localStorage.setItem(storeKey,JSON.stringify(favorites))}catch(e){}$('favoriteCount').textContent=favorites.length}
function toast(message){const el=$('toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('visible'),2200)}
function pool(){return active==='all'?all:all.filter(x=>x.section.id===active)}
function next(random=false){let options=pool();if(!options.length)return;let possible=options.filter(x=>!current||x.key!==current.key);if(!possible.length)possible=options;current=possible[random?Math.floor(Math.random()*possible.length):0];renderCard()}
function renderCard(){if(!current)return;$('experienceKicker').textContent=active==='all'?'UN POQUITO DE TODO':current.section.name.toUpperCase();$('contentPill').textContent=current.section.label;$('cardSymbol').textContent=current.section.icon;$('cardTitle').textContent=current.title;$('cardText').textContent=current.text;$('cardExtra').textContent=current.extra;$('cardExtra').hidden=!current.extra;$('cardIndex').textContent='Un instante para disfrutar';const liked=favorites.includes(current.key);$('heartButton').textContent=liked?'♥':'♡';$('heartButton').classList.toggle('liked',liked);$('heartButton').setAttribute('aria-pressed',String(liked));$('heartButton').setAttribute('aria-label',liked?'Quitar de favoritos':'Guardar en favoritos')}
function choose(id){active=id;const options=pool();current=options[Math.floor(Math.random()*options.length)];document.querySelectorAll('.category').forEach(b=>{const selected=b.dataset.section===id;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected))});renderCard();$('experience').scrollIntoView({behavior:'smooth',block:'start'})}
function surprise(){active='all';document.querySelectorAll('.category').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});next(true);$('experience').scrollIntoView({behavior:'smooth',block:'start'})}
function toggleFavorite(){if(!current)return;if(favorites.includes(current.key)){favorites=favorites.filter(k=>k!==current.key);toast('Quitado de favoritos')}else{favorites.unshift(current.key);toast('Guardado para volver a leer ♡')}saveFavorites();renderCard()}
let favoriteFilter='frases';
const memoryStore='heyhey-recuerdos-favoritos-v13';
let favoriteMemories=[];
try{const saved=JSON.parse(localStorage.getItem(memoryStore)||'[]');if(Array.isArray(saved))favoriteMemories=saved.filter(x=>typeof x==='string').slice(0,25)}catch(e){}
function saveMemories(){try{localStorage.setItem(memoryStore,JSON.stringify(favoriteMemories))}catch(e){toast('Tu navegador no permitió guardar el recuerdo')}}
function showFavorites(){
 const list=$('favoritesList');list.replaceChildren();
 document.querySelectorAll('.fav-filter').forEach(b=>{const active=b.dataset.filter===favoriteFilter;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 const addEmpty=t=>{const div=document.createElement('div');div.className='empty-favorites';div.textContent=t;list.append(div)};
 if(favoriteFilter==='frases'){
  if(!favorites.length)addEmpty('Aún no guardas frases. Cuando una te guste, toca el corazón ♡');
  favorites.forEach(key=>{const item=all.find(x=>x.key===key);if(!item)return;const article=document.createElement('article');article.className='favorite-item';const label=document.createElement('span');label.className='category-line';label.textContent=item.section.label;const title=document.createElement('h3');title.textContent=item.title;const body=document.createElement('p');body.textContent=item.text;const remove=document.createElement('button');remove.textContent='Quitar';remove.addEventListener('click',()=>{favorites=favorites.filter(k=>k!==key);saveFavorites();showFavorites();renderCard()});article.append(label,title,body,remove);list.append(article)});
 }else if(favoriteFilter==='curiosidades'){
  let stored=[];try{stored=JSON.parse(localStorage.getItem('heyhey-curiosidades-favoritas-v11')||'[]')}catch(e){}const facts=window.heyheyDailyFacts||[];
  const valid=Array.isArray(stored)?stored.filter(i=>Number.isInteger(i)&&facts[i]):[];
  if(!valid.length)addEmpty('Tus curiosidades guardadas aparecerán aquí ✦');
  valid.forEach(i=>{const article=document.createElement('article');article.className='favorite-item';const title=document.createElement('h3');title.textContent=facts[i][1];const body=document.createElement('p');body.textContent=facts[i][2];article.append(title,body);list.append(article)});
 }else{
  if(!favoriteMemories.length)addEmpty('Los secretos y recuerdos especiales que guardes aparecerán aquí ✧');
  favoriteMemories.forEach((memory,i)=>{const article=document.createElement('article');article.className='favorite-item';const body=document.createElement('p');body.textContent=memory;const remove=document.createElement('button');remove.textContent='Quitar';remove.addEventListener('click',()=>{favoriteMemories.splice(i,1);saveMemories();showFavorites()});article.append(body,remove);list.append(article)});
 }
 if(!$('favoritesDialog').open)$('favoritesDialog').showModal();
}
document.querySelectorAll('.fav-filter').forEach(button=>button.addEventListener('click',()=>{favoriteFilter=button.dataset.filter;showFavorites()}));

sections.forEach((section,i)=>{const tag=document.createElement('span');tag.className='wheel-label';const a=(i+.5)*2*Math.PI/sections.length-Math.PI/2;tag.style.left=(50+36*Math.cos(a))+'%';tag.style.top=(50+36*Math.sin(a))+'%';tag.textContent=section.icon;tag.title=section.name;wheel.append(tag)});
$('spinWheel').addEventListener('click',()=>{
 if(spinning)return;spinning=true;const button=$('spinWheel');button.disabled=true;
 const n=sections.length,selected=Math.floor(Math.random()*n);
 // Each sector starts at 12 o'clock. Stop the sector midpoint at the top pointer.
 const target=(360-(selected+.5)*360/n)%360;
 const current=((wheelTurns%360)+360)%360;
 const delta=(target-current+360)%360;
 wheelTurns+=1440+delta;
 wheel.style.transform=`rotate(${wheelTurns}deg)`;
 $('wheelResult').textContent='La magia está eligiendo… ✦';
 const finish=()=>{if(!spinning)return;spinning=false;button.disabled=false;const section=sections[selected];$('wheelResult').textContent='¡Te tocó «'+section.name+'»! ♡';choose(section.id);$('experience').scrollIntoView({behavior:'smooth',block:'start'});};
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){finish()}else{setTimeout(finish,4800)}
});
// V10 · Mensaje de bienvenida distinto en cada visita; no se guardan visitas.
const welcomeMessages=[
 '¿Recuerdas que te amo mucho, sí?',
 '¿Recuerdas que eres increíble y que me haces muy feliz?',
 '¿Recuerdas cuánto me encanta tu cabello rojo, mi princesa?',
 '¿Recuerdas que eres muy bonita, bella y preciosa para mí?',
 '¿Recuerdas que me fascina tu sonrisa, HeyHey?',
 '¿Recuerdas que eres única y que adoro tu manera de ser?',
 '¿Recuerdas que eres mi princesa y que te amo con toda mi alma?',
 '¿Recuerdas que no necesitas hacer nada para merecer mi cariño?'
];
const welcome=$('welcomeDialog');
$('welcomeMessage').textContent=welcomeMessages[Math.floor(Math.random()*welcomeMessages.length)];
$('enterHeyHey').addEventListener('click',()=>welcome.close());
// Apertura en cada visita, incluidas las recargas, sin identificación ni estadísticas.
try{welcome.showModal()}catch(e){}
$('year').textContent=new Date().getFullYear();$('surpriseButton').addEventListener('click',surprise);$('closingSurprise').addEventListener('click',surprise);$('exploreButton').addEventListener('click',()=>$('explore').scrollIntoView({behavior:'smooth'}));$('homeButton').addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));$('backButton').addEventListener('click',()=>{$('explore').scrollIntoView({behavior:'smooth'});active='all'});$('nextButton').addEventListener('click',()=>next(true));$('heartButton').addEventListener('click',toggleFavorite);$('copyButton').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(current.title+'\n\n'+current.text);toast('Copiado al portapapeles')}catch(e){toast('No fue posible copiar automáticamente')}});$('favoritesButton').addEventListener('click',showFavorites);$('footerFavorites').addEventListener('click',showFavorites);$('closeFavorites').addEventListener('click',()=>$('favoritesDialog').close());$('favoritesDialog').addEventListener('click',e=>{if(e.target===$('favoritesDialog'))$('favoritesDialog').close()});
function stopBreathing(completed=false){clearInterval(breathInterval);clearTimeout(breathTimeout);breathInterval=null;breathTimeout=null;$('breathCircle').classList.remove('expand');$('breathLabel').textContent='inhala calma';$('breathSub').textContent='a tu propio ritmo';$('breathButton').hidden=false;$('stopBreathButton').hidden=true;$('breathStatus').textContent=completed?'Qué bien regalarte estos dos minutos ♡':'Cuando quieras, comenzamos.'}
function startBreathing(){if(breathInterval)return;$('breathButton').hidden=true;$('stopBreathButton').hidden=false;const started=Date.now();function tick(){const elapsed=Date.now()-started;if(elapsed>=120000){stopBreathing(true);return}const part=elapsed%10000;const inhale=part<4000;const hold=part>=4000&&part<6000;$('breathCircle').classList.toggle('expand',inhale||hold);$('breathLabel').textContent=inhale?'inhala':hold?'sostén':'exhala';$('breathSub').textContent=inhale?'suavemente':hold?'sin esfuerzo':'con tranquilidad';$('breathStatus').textContent='Pausa guiada · '+Math.max(0,Math.ceil((120000-elapsed)/1000))+' s restantes'}tick();breathInterval=setInterval(tick,150);breathTimeout=setTimeout(()=>stopBreathing(true),120100)}
$('breathButton').addEventListener('click',startBreathing);$('stopBreathButton').addEventListener('click',()=>stopBreathing(false));document.addEventListener('visibilitychange',()=>{if(document.hidden&&breathInterval)stopBreathing(false)});current=all[0];renderCard();saveFavorites();


const feedbackKey='para-heyhey-feedback-v1';
function readFeedback(){const form=$('feedbackForm');return {mood:form.querySelector('[name="mood"]:checked')?.value||'No respondido',help:form.querySelector('[name="help"]:checked')?.value||'No respondido',note:$('feedbackNote').value.trim()}}
function feedbackText(){const f=readFeedback();return `Para HeyHey — cómo me sentí\nÁnimo: ${f.mood}\n¿Me ayudó?: ${f.help}\nPara la próxima: ${f.note||'Sin comentario'}`}
$('feedbackForm').addEventListener('submit',e=>{e.preventDefault();const f=readFeedback();try{localStorage.setItem(feedbackKey,JSON.stringify(f));$('feedbackStatus').textContent='Gracias por compartirlo, HeyHey ♡ Tu respuesta se guardó solo en este navegador.'}catch(err){$('feedbackStatus').textContent='No pudimos guardarlo en este navegador. Puedes usar “Copiar para compartir”.'}});
$('sendFeedback').addEventListener('click',async()=>{
 const endpoint=window.HEYHEY_FEEDBACK_ENDPOINT||'';
 if(!endpoint){$('feedbackStatus').textContent='El buzón todavía no está conectado. Por ahora puedes copiar tu respuesta para compartirla con Noel ♡';return;}
 if(!/^https:\/\/script\.google\.com\/macros\/s\//.test(endpoint)){$('feedbackStatus').textContent='No se configuró correctamente el buzón. Puedes usar “Copiar para compartir”.';return;}
 const f=readFeedback();
 if(!confirm('¿Quieres compartir estas respuestas con Noel? Él podrá leerlas en su hoja privada.'))return;
 const button=$('sendFeedback');button.disabled=true;$('feedbackStatus').textContent='Enviando tu respuesta…';
 try{
  const body=new URLSearchParams({mood:f.mood,help:f.help,note:f.note,source:'heyhey-v7'});
  await fetch(endpoint,{method:'POST',mode:'no-cors',body});
  $('feedbackStatus').textContent='Tu respuesta se envió para procesarse ♡ Si quieres asegurarte de que Noel la reciba, usa también “Copiar para compartir”.';
 }catch(err){$('feedbackStatus').textContent='No se pudo enviar esta vez. Puedes guardarla o copiarla para compartirla.'}
 finally{button.disabled=false;}
});
$('copyFeedback').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(feedbackText());$('feedbackStatus').textContent='Respuesta copiada. Tú eliges si deseas compartirla ♡'}catch(err){$('feedbackStatus').textContent='No se pudo copiar automáticamente.'}});
try{const saved=JSON.parse(localStorage.getItem(feedbackKey)||'null');if(saved){for(const name of ['mood','help']){const match=[...$('feedbackForm').querySelectorAll(`[name="${name}"]`)].find(i=>i.value===saved[name]);if(match)match.checked=true}$('feedbackNote').value=saved.note||''}}catch(err){}

// Acceso directo al rincón de El Principito
$('princeButton').addEventListener('click',()=>choose('principito'));

// Atajos desde los homenajes especiales a las secciones interactivas.
document.querySelectorAll('[data-world]').forEach(button=>button.addEventListener('click',()=>{const category=button.dataset.world;const item=sections.find(x=>x.id===category);if(item)choose(category);}));


// V9: Estrellas, cartas y farolillos. No hay envío remoto de datos personales.
(() => {
 const starNotes=[
 'HeyHey, una de mis cosas favoritas es saber que existes en mi vida. Te amo con toda mi alma. ♡',
 'Tu cabello rojo me encanta, pero tu manera de ser es lo que hace que quiera conocerte más cada día.',
 'No hace falta que hoy puedas con todo. Estoy orgulloso de ti, incluso cuando decides descansar.',
 'Eres mi princesa, siempre tan bella y preciosa. Y sobre todo: tan tú.',
 'Me encanta escucharte hablar de tus libros, tus canciones y esos mundos que tanto te emocionan.',
 'Todavía recuerdo nuestras primeras conversaciones. No sabía cuántos momentos bonitos vendrían después.',
 'Si una estrella pudiera abrazar, te enviaría un cielo completo. — Noel HM',
 'Mi niña hermosa: tienes derecho a cambiar de idea, empezar de nuevo y avanzar a tu propio ritmo.',
 'Un día a la vez, HeyHey. Yo quiero caminar contigo, no pedirte que corras. ♡'
 ];
 const coords=[[12,22],[29,56],[44,27],[61,60],[78,24],[88,66],[19,82],[52,83],[69,15]];
 const sky=document.getElementById('starSky'),message=document.getElementById('starMessage');
 if(sky&&message)coords.forEach(([x,y],i)=>{const button=document.createElement('button');button.type='button';button.className='tap-star';button.textContent=i%3===0?'✧':'✦';button.style.left=x+'%';button.style.top=y+'%';button.setAttribute('aria-label','Descubrir mensaje de la estrella '+(i+1));button.addEventListener('click',()=>{button.classList.add('visited');message.replaceChildren();const icon=document.createElement('span');icon.className='star-message-symbol';icon.textContent='✦';const p=document.createElement('p');p.textContent=starNotes[i];message.append(icon,p)});sky.append(button)});
 const letters=[
 {title:'Necesites un abrazo',symbol:'♡',body:['HeyHey, si hoy se siente pesado, quiero dejarte aquí un abrazo hecho de palabras. No tienes que contarme nada si no te nace.','Me gustaría que pudieras verte un instante con mis ojos: preciosa, valiosa, merecedora de cariño, incluso en días difíciles.','Te amo con toda mi alma. Aquí estoy para ti.']},
 {title:'Dudes de ti',symbol:'✧',body:['Mi princesa, no necesitas demostrarme que eres suficiente. Para mí lo eres desde antes de cualquier logro.','Admiro tu sensibilidad, tu creatividad, todo lo que te apasiona, y la forma tan auténtica en que vives las cosas.','Un paso pequeño también cuenta. Un día a la vez, HeyHey.']},
 {title:'Me extrañes',symbol:'✉',body:['Tal vez ahora no estemos en el mismo lugar, pero hay recuerdos que nos acercan.','Pienso en nuestras primeras conversaciones, en tu risa, en lo mucho que me gusta escucharte contar lo que amas.','Si te hace bien, imagina este mensaje como un abrazo largo. Te amo, HeyHey.']},
 {title:'Estés feliz',symbol:'☀',body:['¡Mi niña hermosa! Me encanta imaginarte sonriendo. No tienes que guardar la alegría para una ocasión especial.','Ojalá disfrutes mucho este momento. Me hace feliz saber que hay cosas que te emocionan y que todavía nos esperan muchas historias.','Celebra lo bonito, princesa. Te amo.']},
 {title:'Necesites valentía',symbol:'✦',body:['Pienso en Rapunzel mirando hacia fuera de su torre y me acuerdo de todas esas veces en las que descubrir algo nuevo da miedo.','No tienes que dar el salto más grande. A veces basta con abrir una ventanita y respirar. Tú decides tu ritmo.','Confío en ti, HeyHey. Y si necesitas compañía, cuenta conmigo.']},
 {title:'Quieras recordar lo nuestro',symbol:'❀',body:['Érase una vez alguien que no sabía cuánto cambiaría su vida una conversación en una academia de baile.','Guardo con mucho cariño esos primeros encuentros y todas las pequeñas cosas que fui descubriendo de ti.','Gracias por dejarme conocerte. Me sigue emocionando escribir nuestra historia contigo. — Noel HM']}
 ];
 const grid=document.getElementById('letterGrid'),dialog=document.getElementById('openLetterDialog');
 if(grid&&dialog){const title=document.getElementById('openLetterTitle'),body=document.getElementById('openLetterBody');letters.forEach(letter=>{const b=document.createElement('button');b.type='button';b.className='letter-tile';const icon=document.createElement('span');icon.className='letter-tile-icon';icon.textContent=letter.symbol;const heading=document.createElement('strong');heading.textContent='Abre cuando… '+letter.title.toLowerCase();const hint=document.createElement('small');hint.textContent='Leer mi cartita ↗';b.append(icon,heading,hint);b.addEventListener('click',()=>{title.textContent='Cuando '+letter.title.toLowerCase()+'…';body.replaceChildren();letter.body.forEach(t=>{const p=document.createElement('p');p.textContent=t;body.append(p)});dialog.showModal()});grid.append(b)});document.getElementById('closeLetter').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()})}
 const form=document.getElementById('wishForm'),wishList=document.getElementById('wishList'),wishStatus=document.getElementById('wishStatus'),clear=document.getElementById('clearWishes');const key='para-heyhey-deseos-v9';let wishes=[];
 try{const parsed=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(parsed))wishes=parsed.filter(x=>typeof x==='string').slice(0,20)}catch(e){}
 const persist=()=>{try{localStorage.setItem(key,JSON.stringify(wishes));return true}catch(e){return false}};
 function renderWishes(){wishList.replaceChildren();clear.hidden=!wishes.length;if(!wishes.length){const li=document.createElement('li');li.textContent='Cuando quieras, tu primer deseo puede vivir aquí. ✨';wishList.append(li);return}wishes.forEach((wish,index)=>{const li=document.createElement('li');const txt=document.createElement('span');txt.textContent='✧ '+wish;const remove=document.createElement('button');remove.type='button';remove.textContent='Quitar';remove.setAttribute('aria-label','Eliminar deseo '+(index+1));remove.addEventListener('click',()=>{wishes.splice(index,1);persist();renderWishes()});li.append(txt,remove);wishList.append(li)})}
 if(form){renderWishes();form.addEventListener('submit',e=>{e.preventDefault();const input=document.getElementById('wishText');const wish=input.value.trim();if(!wish){wishStatus.textContent='Escribe un deseo antes de soltar tu farolillo.';return}if(wishes.length>=20){wishStatus.textContent='Tienes 20 lucecitas guardadas. Puedes quitar alguna antes de sumar otra.';return}wishes.unshift(wish.slice(0,180));const stored=persist();renderWishes();input.value='';wishStatus.textContent=stored?'Deseo guardado solamente en este navegador ♡':'Tu farolillo voló, pero este navegador no permitió guardar el deseo.';const flight=document.getElementById('lanternFlight');flight.classList.remove('rising');void flight.offsetWidth;flight.classList.add('rising')});clear.addEventListener('click',()=>{if(!confirm('¿Quieres borrar todos los deseos guardados en este navegador?'))return;wishes=[];persist();renderWishes();wishStatus.textContent='Tus deseos guardados se borraron de este navegador.'})}
})();

// V11 — Curiosidades editoriales que rotan diariamente; sin telemetría.
(() => {
 const facts=[
 ['Universo','La luz de ayer','La luz solar tarda unos 8 minutos y 20 segundos en llegar a la Tierra. Mirar el Sol —sin observarlo directamente— significa recibir luz que salió de él hace varios minutos.','Una pequeña máquina del tiempo, escondida en el día.'],
 ['Animales','Tres corazones bajo el mar','Los pulpos tienen tres corazones: dos llevan sangre a las branquias y uno la distribuye al resto del cuerpo.','La naturaleza siempre nos sorprende.'],
 ['Arte','Un color que cambió la historia','El pigmento azul ultramar se obtenía tradicionalmente del lapislázuli y fue tan costoso que se reservaba para obras de gran importancia.','Hasta los colores tienen historias.'],
 ['Psicología','El poder de los aromas','El sentido del olfato está estrechamente relacionado con sistemas cerebrales que participan en la emoción y la memoria. Por eso algunos olores evocan recuerdos intensos.','¿Qué aroma te trae un recuerdo bonito?'],
 ['Historia','La biblioteca de Alejandría','La antigua Alejandría fue célebre por su gran centro de estudio y su biblioteca; su historia real es más compleja que la idea de un único incendio que lo destruyó todo.','Aprender también es cuestionar las historias conocidas.'],
 ['Naturaleza','Hongos bajo nuestros pies','Las micorrizas son asociaciones entre hongos y raíces de plantas que pueden ayudar al intercambio de nutrientes.','Mucho de lo importante ocurre sin que lo veamos.'],
 ['Literatura','Un pequeño príncipe en muchos idiomas','El Principito se publicó en 1943 y se convirtió en una de las obras francesas más traducidas del mundo.','Hay historias pequeñas que viajan muy lejos.'],
 ['Animales','Los delfines descansan de otro modo','Algunos delfines pueden dormir con un hemisferio cerebral a la vez, lo que les permite mantener funciones necesarias para respirar y vigilar su entorno.','La vida encuentra soluciones fascinantes.'],
 ['Universo','La Luna se aleja','La Luna se aleja de la Tierra aproximadamente 3.8 centímetros cada año, medidos mediante instrumentos de gran precisión.','Incluso el cielo cambia poquito a poquito.'],
 ['Música','Escuchar música y recordar','Las canciones pueden actuar como claves para recuperar recuerdos autobiográficos, incluso años después de escucharlas por primera vez.','Por eso algunas canciones tienen nombre y apellido en el corazón.'],
 ['Naturaleza','La danza de las abejas','Las abejas melíferas realizan una danza que transmite a otras abejas información aproximada sobre la dirección y distancia de fuentes de alimento.','Hasta los insectos tienen mensajes que compartir.'],
 ['Historia','El calendario y sus ajustes','El calendario gregoriano omite algunos años bisiestos para mantenerse mejor alineado con el año solar.','Hasta los calendarios necesitan pequeñas correcciones.'],
 ['Animales','El colibrí hacia atrás','Los colibríes pueden mantener vuelo estacionario y volar hacia atrás gracias a su singular movimiento de alas.','Hay muchas formas de avanzar.'],
 ['Psicología','Descansar favorece la memoria','El sueño participa en procesos importantes para consolidar recuerdos y aprendizajes.','Dormir no es perder el tiempo.'],
 ['Universo','Un día distinto en Venus','Venus tarda más en completar una rotación sobre su eje que en dar una vuelta alrededor del Sol.','El tiempo no se comporta igual en todos los planetas.'],
 ['Cultura','La palabra museo','La palabra “museo” está relacionada con las musas de la tradición griega, figuras asociadas a las artes y al conocimiento.','Aprender el origen de una palabra también es viajar.'],
 ['Animales','Las nutrias y sus herramientas','Algunas nutrias marinas utilizan piedras para abrir las conchas de sus presas.','La inventiva no es solo humana.'],
 ['Naturaleza','Un bosque de una sola especie','Existen colonias de álamos que comparten un sistema de raíces, de modo que varios troncos pueden pertenecer a un mismo organismo clonal.','A veces las conexiones son más profundas de lo que parecen.'],
 ['Historia','El chocolate y Mesoamérica','Antes de las barras dulces actuales, diversas culturas mesoamericanas preparaban bebidas a partir del cacao.','El chocolate tiene siglos de historia.'],
 ['Arte','Las sombras en una pintura','La técnica del claroscuro crea sensación de volumen y dramatismo mediante contrastes de luz y oscuridad.','La luz también puede contar historias.'],
 ['Animales','Un idioma de colores','Los camaleones pueden cambiar de color por factores como la comunicación, la temperatura y el estado fisiológico; no solo para camuflarse.','Un guiño a los camaleones que te gustan.'],
 ['Música','El tempo y las emociones','La rapidez, la intensidad y otros rasgos musicales pueden influir en cómo percibimos el carácter emocional de una pieza.','Cada canción puede acompañar un estado de ánimo.'],
 ['Universo','De qué están hechas las estrellas','Las estrellas se componen principalmente de plasma, con abundancia de hidrógeno y helio.','Y desde aquí parecen pequeños mensajes de luz.'],
 ['Naturaleza','El olor de la lluvia','La palabra “petricor” describe el olor asociado con la lluvia al caer sobre suelo seco, en parte por compuestos liberados del suelo.','Un aroma que a veces se siente como un abrazo.'],
 ['Literatura','Los libros tienen muchas vidas','Antes de la imprenta moderna, numerosos libros circulaban como manuscritos copiados a mano.','Cada historia viajaba de persona a persona.'],
 ['Historia','Las primeras fotografías','Los primeros procesos fotográficos requerían exposiciones mucho más largas que una fotografía con celular.','Guardar recuerdos antes era toda una aventura.'],
 ['Animales','El lenguaje de las hormigas','Las hormigas utilizan señales químicas llamadas feromonas para coordinar diferentes actividades.','Una forma de hablar sin palabras.'],
 ['Psicología','La curiosidad impulsa preguntas','La curiosidad puede motivarnos a buscar información nueva y explorar aquello que todavía no conocemos.','La pregunta de hoy puede abrir un mundo mañana.'],
 ['Naturaleza','Las flores siguen la luz','Algunas plantas jóvenes orientan sus hojas o flores hacia la luz mediante respuestas de crecimiento conocidas como fototropismo.','Buscar la luz también es parte de la vida vegetal.'],
 ['Universo','El cielo no es completamente silencioso','En el espacio no se propaga el sonido como en el aire, pero los científicos pueden convertir mediciones de ondas y señales en sonidos audibles.','Escuchar datos es otra forma de explorar el universo.'],
 ['Cultura','La historia del origami','El plegado de papel tiene una larga tradición en Japón y se ha convertido también en herramienta de diseño, matemática e ingeniería.','Una sola hoja puede guardar muchas posibilidades.'],
 ['Animales','Las mariposas prueban con las patas','Muchas mariposas tienen receptores gustativos en sus patas, lo que les ayuda a identificar superficies y plantas.','Un modo sorprendente de conocer el mundo.'],
 ['Historia','Mapas hechos a mano','Durante siglos los mapas se elaboraron mediante observación, relatos de viajeros y técnicas de medición que fueron mejorando con el tiempo.','Cada mapa comienza con alguien que se atreve a explorar.'],
 ['Música','El piano tiene una gran extensión','Un piano moderno estándar tiene 88 teclas que abarcan más de siete octavas.','Pensé en ti y en lo bonito que es escucharte tocar el teclado.'],
 ['Naturaleza','Los árboles también envejecen','Algunas especies de árboles pueden vivir miles de años; ciertos pinos longevos se encuentran entre los organismos individuales más antiguos conocidos.','Hay historias que crecen despacio.']
 ];
 window.heyheyDailyFacts=facts;
 const ids={title:document.getElementById('dailyFactTitle'),text:document.getElementById('dailyFactText'),extra:document.getElementById('dailyFactExtra'),topic:document.getElementById('dailyTopic'),date:document.getElementById('dailyDate'),save:document.getElementById('saveFact'),status:document.getElementById('dailyStatus'),list:document.getElementById('dailySavedList'),count:document.getElementById('dailySavedCount')};
 if(!ids.title)return;
 const storage='heyhey-curiosidades-favoritas-v11';let favoriteFacts=[];
 try{const p=JSON.parse(localStorage.getItem(storage)||'[]');if(Array.isArray(p))favoriteFacts=p.filter(i=>Number.isInteger(i)&&i>=0&&i<facts.length)}catch(e){}
 const now=new Date(),start=new Date(now.getFullYear(),0,1),day=Math.floor((Date.UTC(now.getFullYear(),now.getMonth(),now.getDate())-Date.UTC(now.getFullYear(),0,1))/86400000);
 let selected=day%facts.length;
 ids.date.textContent=new Intl.DateTimeFormat('es-MX',{day:'numeric',month:'long'}).format(now);
 const store=()=>{try{localStorage.setItem(storage,JSON.stringify(favoriteFacts))}catch(e){ids.status.textContent='Este navegador no permite guardar favoritos.'}};
 function show(){const f=facts[selected];ids.topic.textContent=f[0];ids.title.textContent=f[1];ids.text.textContent=f[2];ids.extra.textContent=f[3];ids.save.textContent=favoriteFacts.includes(selected)?'♥ Guardado':'♡ Guardar esta curiosidad';ids.save.setAttribute('aria-pressed',favoriteFacts.includes(selected)?'true':'false')}
 function showSaved(){ids.list.replaceChildren();ids.count.textContent=favoriteFacts.length;if(!favoriteFacts.length){const p=document.createElement('p');p.textContent='Aquí aparecerán los datos que quieras recordar. ♡';ids.list.append(p);return}favoriteFacts.forEach(n=>{const line=document.createElement('div');line.className='daily-saved-item';const text=document.createElement('span');text.textContent=facts[n][1];const remove=document.createElement('button');remove.type='button';remove.textContent='Quitar';remove.addEventListener('click',()=>{favoriteFacts=favoriteFacts.filter(x=>x!==n);store();showSaved();show()});line.append(text,remove);ids.list.append(line)})}
 document.getElementById('anotherFact').addEventListener('click',()=>{let n=Math.floor(Math.random()*(facts.length-1));if(n>=selected)n++;selected=n;ids.status.textContent='¡Otra curiosidad para ti! ✨';show()});ids.save.addEventListener('click',()=>{favoriteFacts=favoriteFacts.includes(selected)?favoriteFacts.filter(x=>x!==selected):[...favoriteFacts,selected];store();show();showSaved();ids.status.textContent='Tus favoritos se guardan solo en este navegador. ♡'});show();showSaved();
})();

// V12: navegación local entre dos pestañas, sin analíticas.
(() => {
 const tabs=[document.getElementById('tabInicio'),document.getElementById('tabUniverso')];
 const panels=[document.getElementById('panelInicio'),document.getElementById('panelUniverso')];
 if(tabs.some(x=>!x)||panels.some(x=>!x))return;
 function activate(index,scroll=true){
   tabs.forEach((tab,i)=>{const selected=i===index;tab.classList.toggle('active',selected);tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;panels[i].hidden=!selected;});
   if(scroll)window.scrollTo({top:Math.max(0,document.querySelector('.heyhey-tabs').getBoundingClientRect().top+window.scrollY-10),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
 }
 tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activate(i));tab.addEventListener('keydown',e=>{if(['ArrowRight','ArrowLeft','Home','End'].includes(e.key)){e.preventDefault();const n=e.key==='Home'?0:e.key==='End'?1:e.key==='ArrowRight'?(i+1)%2:(i+1)%2;activate(n);tabs[n].focus();}})});
 // Direct links to the stars, letters, dreams or songs open the correct tab.
 const universeIds=['cielo','cartas','deseos','canciones'];
 const target=(location.hash||'').replace(/^#/,'');if(universeIds.includes(target))activate(1,false);
 window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(universeIds.includes(id))activate(1,false)});
 // Keep shortcut buttons valid when the selected section is on the other tab.
 document.getElementById('closingSurprise')?.addEventListener('click',()=>activate(0,false));
 document.getElementById('surpriseButton')?.addEventListener('click',()=>activate(0,false));
})();

// V13: permite borrar solo el formulario guardado en este navegador.
document.getElementById('eraseFeedback')?.addEventListener('click',()=>{
 if(!confirm('¿Borrar tus respuestas guardadas en este dispositivo? Esto no retira ninguna respuesta que hayas enviado voluntariamente.'))return;
 try{localStorage.removeItem('para-heyhey-feedback-v1')}catch(e){}
 document.getElementById('feedbackForm').reset();document.getElementById('feedbackNote').value='';
 document.getElementById('feedbackStatus').textContent='Tus respuestas locales se borraron. ♡';
});
// V13: tres descubrimientos íntimos, sin conteos remotos, seguimiento ni envíos.
(() => {
 const secrets={
  heart:'Te amo con toda mi alma, HeyHey. Si estás leyendo esto, encontraste una de esas cosas que escondo solo para regalarte una sonrisa. Para mí eres mi niña preciosa y me encanta la persona que eres. ♡',
  planet:'En nuestro pequeño planeta hay una rosa muy especial. Tiene tu nombre, tu sonrisa y ese cabello rojo que me fascina. Gracias por dejarme formar parte de tu universo, mi princesa. ✧',
  star:'¿Te acuerdas de aquellas primeras clases de bachata? Yo todavía recuerdo cómo me animabas a intentarlo. No sabía entonces que estaba conociendo a alguien tan importante para mí. ♡',
  starTwo:'Hay un llaverito de guitarra de Morat que me recuerda a nuestras primeras conversaciones. Me encanta descubrir contigo las canciones y los pequeños detalles que terminan convirtiéndose en recuerdos.',
  starThree:'En aquella conversación de diciembre empezamos a conocernos de verdad. Desde entonces guardo con mucho cariño tantos detalles tuyos. Gracias por existir en mi historia. ♡'
 };
 const dialog=document.getElementById('secretDialog'),text=document.getElementById('secretText'),save=document.getElementById('saveSecret');let current='';
 function openSecret(value){current=value;text.textContent=secrets[value];save.textContent=favoriteMemories.includes(secrets[value])?'♥ Recuerdo guardado':'♡ Guardar este recuerdo';dialog.showModal()}
 save.addEventListener('click',()=>{if(!current)return;const memory=secrets[current];if(!favoriteMemories.includes(memory)){favoriteMemories.unshift(memory);saveMemories()}save.textContent='♥ Recuerdo guardado'});
 document.getElementById('closeSecret').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
 let taps=0,last=0;document.getElementById('secretHeart')?.addEventListener('click',()=>{const now=Date.now();if(now-last>6500)taps=0;last=now;taps++;if(taps>=5){taps=0;openSecret('heart')}});
 document.getElementById('planetSecret')?.addEventListener('click',()=>openSecret('planet'));
 document.getElementById('starSky')?.addEventListener('click',e=>{const star=e.target.closest('.tap-star');if(!star)return;const stars=[...document.querySelectorAll('.tap-star')];const idx=stars.indexOf(star);if([1,4,7].includes(idx)){const key=idx===1?'star':idx===4?'starTwo':'starThree';const button=document.createElement('button');button.className='secondary-button';button.type='button';button.textContent='✧ Una sorpresa escondida';button.addEventListener('click',()=>openSecret(key));document.getElementById('starMessage').append(button)}});
})();
