import NavHeader from "../js/components/navHeader.js";
import {ACTIVITY_TYPES} from "./allActivities.js";

document.querySelector('#activitiesFilter').innerHTML = `
            Branches
            <div class="branchesFilter">
                <ul>
                    <li class="form-check">
                        <input class="form-check-input" checked="true" type="checkbox" value="" id="branchAll">
                        <label class="form-check-label" for="branchAll">
                            All Branches
                        </label>
                    </li>
                    <li class="form-check">
                        <input class="form-check-input" type="checkbox" value="" data-filter="branch" data-filter-value="dragonsMist" id="dragonMist">
                        <label class="form-check-label" for="dragonMist">
                            Dragon's Mist
                        </label>
                    </li>
                    <li class="form-check">
                        <input class="form-check-input" type="checkbox" value="" data-filter="branch" data-filter-value="Stromgard" id="stromgard">
                        <label class="form-check-label" for="stromgard">
                            Stromgard
                        </label>
                    </li>
                    <li class="form-check">
                        <input class="form-check-input" type="checkbox" value="" data-filter="branch" data-filter-value="threeMountains" id="threeMountains">
                        <label class="form-check-label" for="threeMountains">
                            Three Mountains
                        </label>
                    </li>
                </ul>

                Activity Type
                <div class="branchesFilter">
                    <ul>
                        <li class="form-check">
                            <input class="form-check-input" checked="true" type="checkbox" value="" id="typeDefault">
                            <label class="form-check-label" for="typeDefault">
                                All
                            </label>
                        </li>   
                        ${ACTIVITY_TYPES.map(type => `
                            <li class="form-check">
                                <input class="form-check-input" type="checkbox" data-filter="type" data-filter-value="${type.id}" id="${type.id}">
                                <label class="form-check-label" for="${type.id}">
                                    ${type.name}
                                </label>
                            </li>
                        `).join('')}
                    </ul>
                </div>`;