//Logika

class HamburgerMenu {
    constructor(menuIconSelector, menuListSelector, hamburgerIconSelector) {
      this.menuIcon = document.querySelector(menuIconSelector);
      this.menuList = document.querySelector(menuListSelector);
      this.hamburgerIcon = document.querySelector(hamburgerIconSelector);
  
      this.menuIcon.addEventListener("click", () => {
        this.toggleMenu();
      });
    }
  
    toggleMenu() {
      if (this.hamburgerIcon.classList.contains("fa-bars")) {
        this.hamburgerIcon.classList.replace("fa-bars", "fa-xmark");
        this.menuList.style.display = "block";
      } else {
        this.hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
        this.menuList.style.display = "none";
      }
    }
  }

  class DarkMode {
    constructor(darkModeSelector, darkModeIcon, content) {
      this.modeSelector = document.querySelector(darkModeSelector);
      this.modeIcon = document.querySelector(darkModeIcon);
      this.contentToChange = document.querySelector(content);
  
      this.modeSelector.addEventListener("click", () => {
        this.toggleMode();
      });
    }
  
    toggleMode() {
      if (this.modeIcon.classList.contains("fa-moon")) {
        this.modeIcon.classList.replace("fa-moon", "fa-sun");
        this.contentToChange.style.backgroundColor = "#333333";
        this.contentToChange.style.color = "white";
      } else {
        this.modeIcon.classList.replace("fa-sun", "fa-moon");
        this.contentToChange.style.backgroundColor = "white";
        this.contentToChange.style.color = "black";
      }
    }
  }


  class ImageZoom {
    constructor(imageSelector) {
      this.images = document.querySelectorAll(imageSelector);
  
      this.images.forEach((image) => {
        image.addEventListener("mouseenter", (event) => {
          this.zoomIn(event.target);
        });
  
        image.addEventListener("mouseleave", (event) => {
          this.zoomOut(event.target); 
        });
      });
    }
  
    zoomIn(image) {
      image.style.width = "83%";
    }
  
    zoomOut(image) {
      image.style.width = "80%";
    }
  }

  class PasswordChecker {
    constructor(twoHTMLtags) {
        this.twoHTMLtags = twoHTMLtags
    }

    getInputContent = (input) => {
        return input.value
    }

    insertContent = (htmlTag, content) => {
        htmlTag.textContent = content
    }

    addClass = (htmltag, className) => {
        htmltag.classList.add(className)
    }

    removeClass = (htmltag, className) => {
        htmltag.classList.remove(className)
    }

    htmlTagCleaner = (input1value, input2value, htmlTag) => {
        if (input1value == "" && input2value == "") {
            htmlTag.textContent = ""
        }
    }
}


class ScrollArrow {
  constructor(icon) {
    this.arrowElement = document.querySelector(icon);
    this.addScrollListener();
    this.addClickListener();
  }

  addScrollListener() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        this.arrowElement.classList.remove('hidden');
      } else {
        this.arrowElement.classList.add('hidden');
      }
    });
  }

  addClickListener() {
    this.arrowElement.addEventListener('click', () => {
      this.scrollToTop();
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}


  
  // Usage
  const hamburgerMenu = new HamburgerMenu(".hamburger-icon", "nav", ".fa-solid");
  const imageZoom = new ImageZoom(".member-photo");
  const arrowIcon = new ScrollArrow(".arrow");
  const darkMode = new DarkMode(".dark-icon", ".fa-moon", "#about-us")

  const passwordInputs = document.querySelectorAll(".password-input")
  const paragraphText = document.querySelector(".result-text")
  const inputChecker = new PasswordChecker(passwordInputs)
  inputChecker.twoHTMLtags.forEach( (oneInput) => {
    oneInput.addEventListener("input", () => {
        const email1Value = inputChecker.getInputContent(inputChecker.twoHTMLtags[0])
        const email2Value = inputChecker.getInputContent(inputChecker.twoHTMLtags[1])
    if (email1Value == email2Value) {
        inputChecker.insertContent(paragraphText, "Hesla jsou shodné") 
        inputChecker.addClass(paragraphText, "valid")                   
        inputChecker.removeClass(paragraphText, "invalid")              
    } else {
        inputChecker.insertContent(paragraphText, "Hesla nejsou stejné")   
        inputChecker.addClass(paragraphText, "invalid")                     
        inputChecker.removeClass(paragraphText, "valid")                    
    }
        inputChecker.htmlTagCleaner(email1Value, email2Value, paragraphText)
    })
})






