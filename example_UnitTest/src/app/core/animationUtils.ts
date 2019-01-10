export function getStylesFromClasses(names:string | string[],
                                    elementType:string="div"):{[key:string]:string|number}{
    let elem = document.createElement(elementType);
    (typeof names == "string" ? [names]:names).forEach(c => elem.classList.add(c));
    let result = {};
    for(let i=0; i< document.styleSheets.length; i++){
        let sheet = document.styleSheets[i] as CSSStyleSheet;
        let rules = sheet.rules || sheet.cssRules;
        for(let j=0; j<rules.length; j++){
            if(rules[j].type == CSSRule.STYLE_RULE){
                let stylerRule = rules[j] as CSSStyleRule;
                if(elem.matches(stylerRule.selectorText)){
                    for(let k=0; k< stylerRule.style.length; k++){
                        result[stylerRule.style[k]]=stylerRule.style[stylerRule.style[k]];
                    }
                }
            }
        }
    }
    return result;
}