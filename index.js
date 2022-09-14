const employee = {
    name: "Sam",
    streetAddress: '54 Broadway',
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    }
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

const destructiveEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway")

function deleteFromEmployeeByKey (obj, key) {
    const newObj = {...obj};

    delete newObj.key

    newObj.key = key;

    return {key}
}

let newerEmployee = deleteFromEmployeeByKey(employee, "name")

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]

    return obj;
}

const newDestructiveEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name')