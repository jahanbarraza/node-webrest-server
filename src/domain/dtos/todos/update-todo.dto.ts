



export class UpdateTodoDto {

    private constructor (
        public readonly id: number,
        public readonly text?: string,
        public readonly completedAt?: Date,
    ){}

get values() {

   const returnObj: {[key: string]: any}= {};

    if ( this.text ) returnObj.text = this.text;
    if ( this.completedAt ) returnObj.completedAt = this.completedAt;

    return returnObj;

}


    //metodo
    static create( props: { [key:string]: any} ): [ string?, UpdateTodoDto? ] {
        
        const { id, text, completedAt } = props;

        let newCompleteAt = completedAt;

        if (!id || isNaN( Number(id))) {    //si no viene el ID o el Id no es un numero arroja el error
            return [' id must be a valid number']
        }

        if ( completedAt ) {
            newCompleteAt = new Date( completedAt )
            if ( newCompleteAt.toString() === 'Invalid Date' ) {
                return [ 'CompleteAt must be a valid date']
            } 
        }

        

        return [undefined, new UpdateTodoDto ( id, text, newCompleteAt )];
    }


}