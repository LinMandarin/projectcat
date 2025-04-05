document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll(".button");
    const modal = document.getElementById("catModal");
    const overlay = document.getElementById("overlay");
    
    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalText = document.getElementById("modalText");
    
    const catDescriptions = {
        bengal: "Бенгальська кішка - справжній маленький леопард з унікальним мармуровим забарвленням, яке нагадує дикого хижака. Ці коти надзвичайно активні, люблять гратися та мають сильний мисливський інстинкт.",
        siamse: "Сіамські коти відомі своїм унікальним забарвленням та яскраво-блакитними очима, які притягують погляд. Вони дуже говіркі, емоційні та прив'язані до своїх господарів, часто слідують за ними по будинку.",
        british: "Британські короткошерсті коти - справжні аристократи з м'яким та врівноваженим характером. Вони мають округлі форми, пухкі щічки та дуже спокійну, врівноважену вдачу, через що їх часто порівнюють з флегматичними джентльменами.",
        sphynx: "Сфінкси - унікальні безшерсті коти з надзвичайно ніжною та теплою шкірою, схожою на замшу. Попри своєму незвичайному вигляду, вони надзвичайно дружелюбні, люблять фізичний контакт та постійно шукають тепла.",
        maineCoone: "Мейн-куни - справжні гіганти серед домашніх котів, відомі своїм величезним розміром та пишною шерстю. Ці розумні та лагідні велетні мають надзвичайно товариську вдачу та чудово ладнають з дітьми та іншими тваринами.",
        ginger: "Руді коти мають особливий темперамент та charm, відомі своєю грайливістю та безтурботністю. Вони часто мають репутацію найбільш дружелюбних та веселих котів, які готові завжди підняти настрій своїм господарям."
    };
    
    buttons.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            
            const card = this.closest(".card");
            const cardImg = card.querySelector("img").src;
            const cardTitle = card.querySelector("h3").textContent;
            const catKey = this.getAttribute("data-cat");
            
            modalImage.src = cardImg;
            modalImage.alt = cardTitle;
            modalName.textContent = cardTitle;
            
            if (catDescriptions[catKey]) {
                modalText.textContent = catDescriptions[catKey];
            }
            
            modal.style.display = "block";
            overlay.style.display = "block";
        });
    });
    overlay.addEventListener("click", function() {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
    
});


