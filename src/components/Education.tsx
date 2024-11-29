function Education(){
    return (<div className="w-full rounded-lg space-y-2 mx-auto max-w-3xl border p-4 md:p-8 bg-gray-50">
    <h2 className="text-2xl font-semibold"> Education</h2>

    <hr className="border-t-2"/>

    <div className="space-y-1 w-full">
        <div className="flex justify-between">
            <h3 className="font-bold md:text-lg">Computer Science</h3>
            <p className="text-nowrap">Expected 2028</p>
        </div>
        <div>
            <h4 className="max-md:text-sm font-medium"> York University</h4>
            <p className="max-md:text-sm font-light">
                <span className="font-bold">Relevant Courses:</span> React, OOP, Discrete Math
            </p>
            <p> <span className="font-bold">GPA:</span> 3.8</p>
        </div>
    </div>
</div>
    );
}

export default Education