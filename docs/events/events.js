import NavHeader from "../js/components/navHeader.js";

fetch('../pages.json').then(resp => resp.json()).then(json => {
    let events = json.event;
    let branches = events.map(e => e.branch).filter(b => !!b).reduce((acc, elm) => {
        if (acc.indexOf(elm) === -1) {
            acc.push(elm);
        }
        return acc;
    }, []).sort();

    let activityTypes = events.map(e => e.type).filter(b => !!b).reduce((acc, elm) => {
        if (acc.indexOf(elm) === -1) {
            acc.push(elm);
        }
        return acc;
    }, []).sort();

    document.querySelector('#branchFilters').innerHTML = `
        Branches
        <div class="branchFilters">
            <ul>
                ${branches.map(b => `
                    <li class="form-check">
                        <input class="form-check-input" checked="true" type="checkbox" value="" id="branchAll">
                        <label class="form-check-label" for="branchAll">
                            ${b}
                        </label>
                    </li>
                `).join('')}
           </ul>
       </div>
    `;

    document.querySelector('#activityFilters').innerHTML = `
        Branches
        <div class="activityFilters">
            <ul>
                ${activityTypes.map(a => `
                    <li class="form-check">
                        <input class="form-check-input" checked="true" type="checkbox" value="" id="branchAll">
                        <label class="form-check-label" for="branchAll">
                            ${a}
                        </label>
                    </li>
                `).join('')}
           </ul>
       </div>
    `;



})

