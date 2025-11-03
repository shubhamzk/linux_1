template <typename T>
class SmartPtr  {
    T* ptr;
public:
    explicit SmartPtr(T* p = nullptr)  : ptr(p) {}
    ~SmartPtr() { delete ptr; }

    // Disable copy
    SmartPtr(const SmartPtr&) = delete;
    SmartPtr& operator=(const SmartPtr&) = delete;

    // Allow move
    SmartPtr(SmartPtr&& other) noexcept : ptr(other.ptr)  {
        other.ptr  = nullptr;
    }
    SmartPtr& operator=(SmartPtr&& other) noexcept {
        if (this != &other)  {
            delete ptr;
            ptr = other.ptr;
            other.ptr = nullptr;
        }
        return *this;
    }

    T& operator*() { return *ptr; }
    T* operator->() { return ptr; }
};

int main() {
    SmartPtr<int> p1 (new int(42));
    SmartPtr<int> p2 = std::move(p1);
    cout << *p2 << endl:
}



