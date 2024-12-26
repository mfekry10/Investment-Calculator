export default function UserInput({onChangeInput , UserInput}){

   

    return(
        <section id="user-input">

            <div className="input-group">
               <p>
                    <label>Initial Investment</label>
                    <input type="number" value={UserInput.initialInvestment} required  onChange={ (e)=> onChangeInput('initialInvestment',e.target.value) }  />
               </p>

               <p>
                    <label>Annual Investment</label>
                    <input type="number" value={UserInput.annualInvestment} required  onChange={ (e)=> onChangeInput('annualInvestment',e.target.value) } />
               </p>
            </div>

            <div className="input-group">
               <p>
                    <label>Expected Return</label>
                    <input type="number" value={UserInput.expectedReturn} required onChange={ (e)=> onChangeInput('expectedReturn',e.target.value) }  />
               </p>

               <p>
                    <label>Duration</label>
                    <input type="number" value={UserInput.duration} required onChange={ (e)=> onChangeInput('duration',e.target.value) }  />
               </p>
            </div>

          

           

        </section>
    )
}