import { NavigateBeforeIcon, NavigateNextIcon, NavigateWrapper } from "./Pagination.styles";

export default function PaginationUI(props){
    return (
        <NavigateWrapper>
            <NavigateBeforeIcon onClick={props.onClickMoveToPreviousPage} />
            {new Array(10).fill(1).map((_, index) => (
                // 현재페이지(index + startPage)가 lastPage 이하까지만 페이징 넘버를 출력
                index + props.startPage <= props.lastPage ?
                    (
                        <span key={index + props.startPage} id={String(index + props.startPage)} style={{cursor:'pointer', fontWeight: index + props.startPage === props.currentPage ? 'bold' : 'normal'}} onClick={props.onClickPage}>
                    {index + props.startPage}
                </span>
                    ) : null
            ))}
            {/* lastPage가 startPage+10 이상이면 다음페이지 버튼 활성화 */}
            {props.startPage + 10 <= props.lastPage && (
                <NavigateNextIcon onClick={props.onClickMoveToNextPage}/>
            )}
        </NavigateWrapper>
    )
}